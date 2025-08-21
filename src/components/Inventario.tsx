import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface InventarioProps {
  onNavigate: (screen: string) => void;
}

export const Inventario: React.FC<InventarioProps> = ({ onNavigate }) => {
  const { state } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategoria, setFilterCategoria] = useState('');

  const categorias = Array.from(new Set(state.amostras.map(a => a.categoria)));

  const amostrasFiltradas = state.amostras.filter(amostra => {
    const matchSearch = amostra.remedio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       amostra.substancia.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       amostra.laboratorio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchCategoria = !filterCategoria || amostra.categoria === filterCategoria;
    
    return matchSearch && matchCategoria;
  });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const getStatusVencimento = (dataValidade: Date) => {
    const hoje = new Date();
    const diasRestantes = Math.ceil((new Date(dataValidade).getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diasRestantes < 0) return { status: 'vencido', cor: 'text-red-600' };
    if (diasRestantes <= 7) return { status: 'crítico', cor: 'text-red-500' };
    if (diasRestantes <= 30) return { status: 'próximo', cor: 'text-yellow-600' };
    return { status: 'normal', cor: 'text-green-600' };
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4">
        <h1 className="text-[22px] font-bold text-[#1c140d] mb-4">
          Inventário
        </h1>
        
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar por remédio, substância ou laboratório..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 pl-12 pr-4 border border-[#e5dbd1] rounded-lg text-[#1c140d] placeholder-[#94734f] focus:outline-none focus:ring-2 focus:ring-[#784512]"
          />
          <Search className="w-5 h-5 text-[#94734f] absolute left-4 top-3.5" />
        </div>

        {/* Filter */}
        <select
          value={filterCategoria}
          onChange={(e) => setFilterCategoria(e.target.value)}
          className="w-full h-12 px-4 border border-[#e5dbd1] rounded-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
        >
          <option value="">Todas as categorias</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      {/* Content */}
      <div className="flex-1 px-4">
        {amostrasFiltradas.length > 0 ? (
          <div className="space-y-3">
            {amostrasFiltradas.map((amostra) => {
              const vencimento = getStatusVencimento(amostra.dataValidade);
              return (
                <div
                  key={amostra.id}
                  className="bg-white border border-[#e5dbd1] rounded-lg p-4 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[16px] font-medium text-[#1c140d] flex-1">
                      {amostra.remedio}
                    </h3>
                    <span className={`text-[14px] font-medium ${vencimento.cor}`}>
                      {amostra.quantidade} un.
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-[14px] text-[#94734f]">
                    <p><span className="font-medium">Substância:</span> {amostra.substancia}</p>
                    <p><span className="font-medium">Categoria:</span> {amostra.categoria}</p>
                    <p><span className="font-medium">Laboratório:</span> {amostra.laboratorio}</p>
                    <p><span className="font-medium">Tipo:</span> {amostra.tipo}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f2ede8]">
                    <p className="text-[14px] text-[#94734f]">
                      <span className="font-medium">Validade:</span> {formatDate(amostra.dataValidade)}
                    </p>
                    <button
                      onClick={() => onNavigate('entregar')}
                      className="px-4 py-2 bg-[#784512] text-white text-[14px] font-medium rounded-lg hover:bg-[#6a3d10] transition-colors"
                    >
                      Entregar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-[#94734f]">
            Nenhuma amostra encontrada
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#f2ede8] px-4 py-3">
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
              <div className="w-6 h-6 bg-[#1c140d] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#1c140d] leading-[18px]">
              Inventário
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate('relatorios')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#94734f] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#94734f] leading-[18px]">
              Relatórios
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};