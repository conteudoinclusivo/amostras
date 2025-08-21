import React, { useState } from 'react';
import { ArrowLeft, Hash, Calendar as CalendarIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { SearchInput } from './SearchInput';
import { Amostra } from '../types';

interface ReceberAmostraProps {
  onNavigate: (screen: string) => void;
}

export const ReceberAmostra: React.FC<ReceberAmostraProps> = ({ onNavigate }) => {
  const { state, dispatch } = useAppContext();
  
  const [formData, setFormData] = useState({
    remedio: '',
    substancia: '',
    categoria: '',
    tipo: 'Amostra' as 'Original' | 'Amostra',
    laboratorio: '',
    representante: '',
    quantidade: '',
    dataValidade: '',
  });

  // Extrair dados únicos para autocomplete
  const remedios = Array.from(new Set(state.amostras.map(a => a.remedio)));
  const substancias = Array.from(new Set(state.amostras.map(a => a.substancia)));
  const categorias = Array.from(new Set(state.amostras.map(a => a.categoria)));
  const laboratorios = Array.from(new Set(state.amostras.map(a => a.laboratorio)));
  const representantes = Array.from(new Set(state.amostras.map(a => a.representante)));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.remedio || !formData.quantidade || !formData.dataValidade) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const novaAmostra: Amostra = {
      id: Date.now().toString(),
      remedio: formData.remedio,
      substancia: formData.substancia,
      categoria: formData.categoria,
      tipo: formData.tipo,
      laboratorio: formData.laboratorio,
      representante: formData.representante,
      quantidade: parseInt(formData.quantidade),
      dataValidade: new Date(formData.dataValidade),
      dataRecebimento: new Date(),
    };

    dispatch({ type: 'ADD_AMOSTRA', payload: novaAmostra });
    
    // Limpar formulário
    setFormData({
      remedio: '',
      substancia: '',
      categoria: '',
      tipo: 'Amostra',
      laboratorio: '',
      representante: '',
      quantidade: '',
      dataValidade: '',
    });

    alert('Amostra adicionada com sucesso!');
    onNavigate('dashboard');
  };

  const handleRemedioSelect = (remedio: string) => {
    setFormData(prev => ({ ...prev, remedio }));
    
    // Auto-completar campos relacionados se o remédio já existe
    const amostraExistente = state.amostras.find(a => a.remedio === remedio);
    if (amostraExistente) {
      setFormData(prev => ({
        ...prev,
        remedio,
        substancia: amostraExistente.substancia,
        categoria: amostraExistente.categoria,
        laboratorio: amostraExistente.laboratorio,
      }));
    }
  };

  const getQuantidadeEmEstoque = () => {
    const amostraExistente = state.amostras.find(a => a.remedio === formData.remedio);
    return amostraExistente ? amostraExistente.quantidade : 0;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="w-12 h-12 flex items-center justify-start"
        >
          <ArrowLeft className="w-6 h-6 text-[#1c140d]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#1c140d] text-center flex-1 pr-12">
          Receber Amostras
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1 px-4 space-y-6">
          {/* Remédio */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Remédio
            </label>
            <SearchInput
              placeholder="Buscar remédio"
              value={formData.remedio}
              onChange={handleRemedioSelect}
              suggestions={remedios}
              onAddNew={(value) => setFormData(prev => ({ ...prev, remedio: value }))}
            />
            {formData.remedio && getQuantidadeEmEstoque() > 0 && (
              <p className="text-sm text-[#94734f]">
                Estoque atual: {getQuantidadeEmEstoque()} unidades
              </p>
            )}
          </div>

          {/* Substância */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Substância
            </label>
            <SearchInput
              placeholder="Buscar substância"
              value={formData.substancia}
              onChange={(value) => setFormData(prev => ({ ...prev, substancia: value }))}
              suggestions={substancias}
              onAddNew={(value) => setFormData(prev => ({ ...prev, substancia: value }))}
            />
          </div>

          {/* Tipo */}
          <div className="space-y-2">
            <div className="bg-[#f2ede8] rounded-lg p-1 flex">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, tipo: 'Amostra' }))}
                className={`flex-1 py-3 px-4 rounded-lg text-[14px] font-medium transition-colors ${
                  formData.tipo === 'Amostra'
                    ? 'bg-white text-[#1c140d] shadow-sm'
                    : 'text-[#94734f]'
                }`}
              >
                Amostra
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, tipo: 'Original' }))}
                className={`flex-1 py-3 px-4 rounded-lg text-[14px] font-medium transition-colors ${
                  formData.tipo === 'Original'
                    ? 'bg-white text-[#1c140d] shadow-sm'
                    : 'text-[#94734f]'
                }`}
              >
                Original
              </button>
            </div>
          </div>

          {/* Categoria */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Categoria
            </label>
            <select
              value={formData.categoria}
              onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value }))}
              className="w-full h-14 px-4 bg-white border border-[#e5dbd1] rounded-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
            >
              <option value="" className="text-[#1c140d]">Selecione</option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>{categoria}</option>
              ))}
            </select>
          </div>

          {/* Laboratório */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Laboratório
            </label>
            <SearchInput
              placeholder="Buscar laboratório"
              value={formData.laboratorio}
              onChange={(value) => setFormData(prev => ({ ...prev, laboratorio: value }))}
              suggestions={laboratorios}
              onAddNew={(value) => setFormData(prev => ({ ...prev, laboratorio: value }))}
            />
          </div>

          {/* Representante */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Representante
            </label>
            <SearchInput
              placeholder="Buscar representante"
              value={formData.representante}
              onChange={(value) => setFormData(prev => ({ ...prev, representante: value }))}
              suggestions={representantes}
              onAddNew={(value) => setFormData(prev => ({ ...prev, representante: value }))}
            />
          </div>

          {/* Quantidade Recebida */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Quantidade Recebida
            </label>
            <div className="flex">
              <input
                type="number"
                min="0"
                value={formData.quantidade}
                onChange={(e) => setFormData(prev => ({ ...prev, quantidade: e.target.value }))}
                placeholder="0"
                className="flex-1 h-14 px-4 bg-white border border-[#e5dbd1] rounded-l-lg text-[#1c140d] placeholder-[#94734f] focus:outline-none focus:ring-2 focus:ring-[#784512]"
              />
              <div className="h-14 px-4 bg-white border border-l-0 border-[#e5dbd1] rounded-r-lg flex items-center">
                <Hash className="w-6 h-6 text-[#94734f]" />
              </div>
            </div>
          </div>

          {/* Data de Validade */}
          <div className="space-y-2">
            <label className="block text-[16px] font-medium text-[#1c140d]">
              Data de Validade
            </label>
            <div className="flex">
              <input
                type="date"
                value={formData.dataValidade}
                onChange={(e) => setFormData(prev => ({ ...prev, dataValidade: e.target.value }))}
                className="flex-1 h-14 px-4 bg-white border border-[#e5dbd1] rounded-l-lg text-[#1c140d] focus:outline-none focus:ring-2 focus:ring-[#784512]"
              />
              <div className="h-14 px-4 bg-white border border-l-0 border-[#e5dbd1] rounded-r-lg flex items-center">
                <CalendarIcon className="w-6 h-6 text-[#94734f]" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-4 py-3">
          <button
            type="submit"
            className="w-full h-12 bg-[#784512] text-white font-bold rounded-lg hover:bg-[#6a3d10] transition-colors"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};