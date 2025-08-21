import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useAppContext } from '../context/AppContext';

interface RelatoriosProps {
  onNavigate: (screen: string) => void;
}

export const Relatorios: React.FC<RelatoriosProps> = ({ onNavigate }) => {
  const { state, getAmostrasVencendoEm } = useAppContext();
  const [activeTab, setActiveTab] = useState<'movimentacao' | 'vencimentos'>('movimentacao');

  // Dados para gráfico de movimentação
  const dadosMovimentacao = [
    { mes: 'Jan', recebidas: 5, entregues: 3 },
    { mes: 'Fev', recebidas: 8, entregues: 6 },
    { mes: 'Mar', recebidas: 12, entregues: 9 },
    { mes: 'Abr', recebidas: 7, entregues: 5 },
    { mes: 'Mai', recebidas: 10, entregues: 8 },
    { mes: 'Jun', recebidas: 6, entregues: 4 },
  ];

  // Dados para gráfico de categorias
  const categorias = state.amostras.reduce((acc, amostra) => {
    acc[amostra.categoria] = (acc[amostra.categoria] || 0) + amostra.quantidade;
    return acc;
  }, {} as Record<string, number>);

  const dadosCategorias = Object.entries(categorias).map(([categoria, quantidade]) => ({
    name: categoria,
    value: quantidade,
  }));

  const cores = ['#784512', '#94734f', '#f2ede8', '#e5dbd1', '#1c140d'];

  // Dados de vencimento
  const vencimentos7Dias = getAmostrasVencendoEm(7);
  const vencimentos30Dias = getAmostrasVencendoEm(30);
  const vencimentos60Dias = getAmostrasVencendoEm(60);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const exportarVencimentos = () => {
    const dados = vencimentos60Dias.map(amostra => ({
      Remédio: amostra.remedio,
      Categoria: amostra.categoria,
      Laboratório: amostra.laboratorio,
      Quantidade: amostra.quantidade,
      'Data de Validade': formatDate(amostra.dataValidade),
    }));

    // Simular download de CSV
    const csv = [
      Object.keys(dados[0] || {}).join(','),
      ...dados.map(item => Object.values(item).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vencimentos.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4">
        <h1 className="text-[22px] font-bold text-[#1c140d] mb-4">
          Relatórios
        </h1>
        
        {/* Tabs */}
        <div className="flex bg-[#f2ede8] rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('movimentacao')}
            className={`flex-1 py-3 px-4 rounded-lg text-[14px] font-medium transition-colors ${
              activeTab === 'movimentacao'
                ? 'bg-white text-[#1c140d] shadow-sm'
                : 'text-[#94734f]'
            }`}
          >
            Movimentação
          </button>
          <button
            onClick={() => setActiveTab('vencimentos')}
            className={`flex-1 py-3 px-4 rounded-lg text-[14px] font-medium transition-colors ${
              activeTab === 'vencimentos'
                ? 'bg-white text-[#1c140d] shadow-sm'
                : 'text-[#94734f]'
            }`}
          >
            Vencimentos
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pb-20">
        {activeTab === 'movimentacao' ? (
          <div className="space-y-6">
            {/* Gráfico de Movimentação */}
            <div className="bg-white border border-[#e5dbd1] rounded-lg p-4">
              <h3 className="text-[18px] font-medium text-[#1c140d] mb-4">
                Movimentação Mensal
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dadosMovimentacao}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f2ede8" />
                    <XAxis dataKey="mes" stroke="#94734f" />
                    <YAxis stroke="#94734f" />
                    <Bar dataKey="recebidas" fill="#784512" name="Recebidas" />
                    <Bar dataKey="entregues" fill="#94734f" name="Entregues" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Gráfico de Categorias */}
            <div className="bg-white border border-[#e5dbd1] rounded-lg p-4">
              <h3 className="text-[18px] font-medium text-[#1c140d] mb-4">
                Distribuição por Categoria
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dadosCategorias}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {dadosCategorias.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Estatísticas Gerais */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#e5dbd1] rounded-lg p-4 text-center">
                <p className="text-[24px] font-bold text-[#784512]">
                  {state.amostras.reduce((sum, a) => sum + a.quantidade, 0)}
                </p>
                <p className="text-[14px] text-[#94734f]">Total em Estoque</p>
              </div>
              <div className="bg-white border border-[#e5dbd1] rounded-lg p-4 text-center">
                <p className="text-[24px] font-bold text-[#784512]">
                  {state.entregas.length}
                </p>
                <p className="text-[14px] text-[#94734f]">Entregas Realizadas</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Botão de Exportar */}
            <div className="flex justify-end">
              <button
                onClick={exportarVencimentos}
                className="px-4 py-2 bg-[#784512] text-white text-[14px] font-medium rounded-lg hover:bg-[#6a3d10] transition-colors"
              >
                Exportar Lista
              </button>
            </div>

            {/* Cards de Vencimento */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-[16px] font-medium text-red-800 mb-2">
                  Vencendo em 7 dias ({vencimentos7Dias.length})
                </h3>
                {vencimentos7Dias.length > 0 ? (
                  <div className="space-y-2">
                    {vencimentos7Dias.map((amostra) => (
                      <div key={amostra.id} className="text-[14px] text-red-700">
                        {amostra.remedio} - {formatDate(amostra.dataValidade)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-red-600">Nenhuma amostra vencendo</p>
                )}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-[16px] font-medium text-yellow-800 mb-2">
                  Vencendo em 30 dias ({vencimentos30Dias.length})
                </h3>
                {vencimentos30Dias.length > 0 ? (
                  <div className="space-y-2">
                    {vencimentos30Dias.map((amostra) => (
                      <div key={amostra.id} className="text-[14px] text-yellow-700">
                        {amostra.remedio} - {formatDate(amostra.dataValidade)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-yellow-600">Nenhuma amostra vencendo</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-[16px] font-medium text-blue-800 mb-2">
                  Vencendo em 60 dias ({vencimentos60Dias.length})
                </h3>
                {vencimentos60Dias.length > 0 ? (
                  <div className="space-y-2">
                    {vencimentos60Dias.map((amostra) => (
                      <div key={amostra.id} className="text-[14px] text-blue-700">
                        {amostra.remedio} - {formatDate(amostra.dataValidade)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-blue-600">Nenhuma amostra vencendo</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#f2ede8] px-4 py-3 fixed bottom-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#94734f] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#94734f] leading-[18px]">
              Painel de Controle
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate('inventario')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#94734f] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#94734f] leading-[18px]">
              Inventário
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate('relatorios')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#1c140d] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#1c140d] leading-[18px]">
              Relatórios
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};