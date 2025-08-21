import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { SearchInput } from './SearchInput';
import { Entrega, Lembrete, LocalEntrega } from '../types';

interface EntregarAmostraProps {
  onNavigate: (screen: string) => void;
}

export const EntregarAmostra: React.FC<EntregarAmostraProps> = ({ onNavigate }) => {
  const { state, dispatch } = useAppContext();
  
  const [formData, setFormData] = useState({
    paciente: '',
    remedio: '',
    localEntrega: '' as LocalEntrega | '',
    quantidade: '',
    agendarLembrete: false,
    tituloLembrete: '',
    dataLembrete: '',
    horaLembrete: '',
  });

  const locaisEntrega: LocalEntrega[] = ['Clínica', 'Posto de Saúde', 'Família', 'Universidade'];
  const pacientes = state.pacientes.map(p => p.nome);
  const remedios = state.amostras.filter(a => a.quantidade > 0).map(a => a.remedio);

  const getAmostraDisponivel = () => {
    return state.amostras.find(a => a.remedio === formData.remedio && a.quantidade > 0);
  };

  const handlePacienteChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paciente: value,
      tituloLembrete: value ? `Entregar amostra a ${value}` : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.paciente || !formData.remedio || !formData.quantidade || !formData.localEntrega) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const amostra = getAmostraDisponivel();
    if (!amostra) {
      alert('Amostra não encontrada no estoque');
      return;
    }

    const quantidadeEntrega = parseInt(formData.quantidade);
    if (quantidadeEntrega > amostra.quantidade) {
      alert(`Quantidade insuficiente em estoque. Disponível: ${amostra.quantidade}`);
      return;
    }

    if (formData.agendarLembrete && (!formData.dataLembrete || !formData.horaLembrete)) {
      alert('Por favor, preencha os dados do lembrete');
      return;
    }

    // Criar lembrete se solicitado
    let lembrete: Lembrete | undefined;
    if (formData.agendarLembrete) {
      lembrete = {
        id: Date.now().toString(),
        titulo: formData.tituloLembrete || `Entregar amostra a ${formData.paciente}`,
        data: new Date(formData.dataLembrete),
        hora: formData.horaLembrete,
        paciente: formData.paciente,
        amostra: formData.remedio,
      };
      dispatch({ type: 'ADD_LEMBRETE', payload: lembrete });
    }

    // Adicionar paciente se não existir
    if (!state.pacientes.find(p => p.nome === formData.paciente)) {
      dispatch({
        type: 'ADD_PACIENTE',
        payload: { id: Date.now().toString(), nome: formData.paciente },
      });
    }

    // Criar entrega
    const novaEntrega: Entrega = {
      id: Date.now().toString(),
      paciente: formData.paciente,
      amostra: formData.remedio,
      quantidade: quantidadeEntrega,
      localEntrega: formData.localEntrega,
      data: new Date(),
      lembrete,
    };

    dispatch({ type: 'ADD_ENTREGA', payload: novaEntrega });

    // Atualizar estoque
    dispatch({
      type: 'UPDATE_AMOSTRA_QUANTIDADE',
      payload: {
        id: amostra.id,
        quantidade: amostra.quantidade - quantidadeEntrega,
      },
    });

    // Limpar formulário
    setFormData({
      paciente: '',
      remedio: '',
      localEntrega: '' as LocalEntrega | '',
      quantidade: '',
      agendarLembrete: false,
      tituloLembrete: '',
      dataLembrete: '',
      horaLembrete: '',
    });

    alert('Entrega registrada com sucesso!');
    onNavigate('dashboard');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="w-12 h-12 flex items-center justify-start"
        >
          <X className="w-6 h-6 text-[#1c140d]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#1c140d] text-center flex-1 pr-12">
          Nova Entrega
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1 px-4 space-y-6">
          {/* Paciente */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Paciente
            </label>
            <SearchInput
              placeholder="Buscar paciente..."
              value={formData.paciente}
              onChange={handlePacienteChange}
              suggestions={pacientes}
              onAddNew={(value) => handlePacienteChange(value)}
              className="bg-[#f2ede8]"
            />
          </div>

          {/* Remédio */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Remédio
            </label>
            <SearchInput
              placeholder="Buscar remédio..."
              value={formData.remedio}
              onChange={(value) => setFormData(prev => ({ ...prev, remedio: value }))}
              suggestions={remedios}
              className="bg-[#f2ede8]"
            />
            {formData.remedio && getAmostraDisponivel() && (
              <p className="text-sm text-[#94734f]">
                Estoque disponível: {getAmostraDisponivel()?.quantidade} unidades
              </p>
            )}
          </div>

          {/* Local de Entrega */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Local de Entrega
            </label>
            <select
              value={formData.localEntrega}
              onChange={(e) => setFormData(prev => ({ ...prev, localEntrega: e.target.value as LocalEntrega }))}
              className="w-full h-14 px-4 bg-[#f2ede8] border-0 rounded-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
            >
              <option value="">Selecione o local</option>
              {locaisEntrega.map((local) => (
                <option key={local} value={local}>{local}</option>
              ))}
            </select>
          </div>

          {/* Quantidade a Ser Entregue */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Quantidade a Ser Entregue
            </label>
            <input
              type="number"
              min="0"
              max={getAmostraDisponivel()?.quantidade || 0}
              value={formData.quantidade}
              onChange={(e) => setFormData(prev => ({ ...prev, quantidade: e.target.value }))}
              placeholder="0"
              className="w-full h-14 px-4 bg-[#f2ede8] border-0 rounded-lg text-[#1c140d] placeholder-[#94734f] focus:outline-none focus:ring-2 focus:ring-[#784512]"
            />
          </div>

          {/* Agendar Lembrete */}
          <div className="bg-white h-14 flex items-center justify-between px-4">
            <span className="text-[16px] text-[#1c140d]">Agendar Lembrete?</span>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, agendarLembrete: !prev.agendarLembrete }))}
              className={`w-[51px] h-[31px] rounded-[15.5px] p-[2px] transition-colors ${
                formData.agendarLembrete ? 'bg-[#784512]' : 'bg-[#f2ede8]'
              }`}
            >
              <div className={`w-[27px] h-[27px] bg-white rounded-[13.5px] shadow-sm transition-transform ${
                formData.agendarLembrete ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Campos do Lembrete (condicionais) */}
          {formData.agendarLembrete && (
            <>
              {/* Título do Lembrete */}
              <div className="space-y-2">
                <label className="block text-[16px] font-medium text-[#1c140d]">
                  Título do Lembrete
                </label>
                <input
                  type="text"
                  value={formData.tituloLembrete}
                  onChange={(e) => setFormData(prev => ({ ...prev, tituloLembrete: e.target.value }))}
                  placeholder="Ex: Próxima consulta"
                  className="w-full h-14 px-4 bg-[#f2ede8] border-0 rounded-lg text-[#1c140d] placeholder-[#94734f] focus:outline-none focus:ring-2 focus:ring-[#784512]"
                />
              </div>

              {/* Data */}
              <div className="space-y-2">
                <label className="block text-[16px] font-medium text-[#1c140d]">
                  Data
                </label>
                <input
                  type="date"
                  value={formData.dataLembrete}
                  onChange={(e) => setFormData(prev => ({ ...prev, dataLembrete: e.target.value }))}
                  className="w-full h-14 px-4 bg-[#f2ede8] border-0 rounded-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
                />
              </div>

              {/* Hora */}
              <div className="space-y-2">
                <label className="block text-[16px] font-medium text-[#1c140d]">
                  Hora
                </label>
                <input
                  type="time"
                  value={formData.horaLembrete}
                  onChange={(e) => setFormData(prev => ({ ...prev, horaLembrete: e.target.value }))}
                  className="w-full h-14 px-4 bg-[#f2ede8] border-0 rounded-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
                />
              </div>
            </>
          )}
        </div>

        {/* Submit Button */}
        <div className="px-4 py-3">
          <button
            type="submit"
            className="w-full h-12 bg-[#784512] text-white font-bold rounded-lg hover:bg-[#6a3d10] transition-colors"
          >
            Entregar
          </button>
        </div>
      </form>
    </div>
  );
};