import React from 'react';
import { Calendar, Settings } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import imgDepth4Frame1 from "../imports/Home";
import imgDepth4Frame2 from "../imports/Home";

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { getProximosLembretes, getAmostrasVencendoEm } = useAppContext();
  
  const proximosLembretes = getProximosLembretes();
  const vencimentosProximos = getAmostrasVencendoEm(60); // Próximos 60 dias

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <h1 className="text-[18px] font-bold text-[#1c140d] text-center flex-1">
          Painel de Controle
        </h1>
        <button className="w-12 h-12 flex items-center justify-center">
          <Settings className="w-6 h-6 text-[#1c140d]" />
        </button>
      </div>

      <div className="flex-1 px-4 pb-4">
        {/* Action Cards */}
        <div className="space-y-4 mb-8">
          {/* Receber Amostra Card */}
          <div 
            onClick={() => onNavigate('receber')}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start justify-between cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <h3 className="text-[16px] font-bold text-[#1c140d] mb-1">
                Receber Amostra
              </h3>
              <p className="text-[14px] text-[#94734f] leading-tight">
                Adicionar novas amostras ao seu inventário.
              </p>
            </div>
            <div className="w-[66px] h-[66px] bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center ml-4">
              <div className="w-8 h-8 bg-orange-400 rounded opacity-80" />
            </div>
          </div>

          {/* Entregar Amostra Card */}
          <div 
            onClick={() => onNavigate('entregar')}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start justify-between cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <h3 className="text-[16px] font-bold text-[#1c140d] mb-1">
                Entregar Amostra
              </h3>
              <p className="text-[14px] text-[#94734f] leading-tight w-[199px]">
                Registrar a entrega de amostras aos pacientes.
              </p>
            </div>
            <div className="w-[66px] h-[66px] bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center ml-4">
              <div className="w-8 h-8 bg-yellow-400 rounded opacity-80" />
            </div>
          </div>
        </div>

        {/* Próximos Lembretes */}
        <div className="mb-8">
          <h2 className="text-[22px] font-bold text-[#1c140d] mb-5 px-0">
            Próximos Lembretes
          </h2>
          <div className="space-y-0">
            {proximosLembretes.length > 0 ? (
              proximosLembretes.map((lembrete) => (
                <div key={lembrete.id} className="bg-white h-[72px] flex items-center px-4 py-2">
                  <div className="bg-[#f2ede8] rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-[#1c140d]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[16px] font-medium text-[#1c140d] leading-6">
                      {lembrete.titulo}
                    </p>
                    <p className="text-[14px] text-[#94734f] leading-5">
                      {formatDate(new Date(lembrete.data))}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-[#94734f]">
                Nenhum lembrete próximo
              </div>
            )}
          </div>
        </div>

        {/* Vencimentos Próximos */}
        <div>
          <h2 className="text-[22px] font-bold text-[#1c140d] mb-5 px-0">
            Vencimentos Próximos
          </h2>
          <div className="space-y-0">
            {vencimentosProximos.length > 0 ? (
              vencimentosProximos.map((amostra) => (
                <div key={amostra.id} className="bg-white h-[72px] flex items-center px-4 py-2">
                  <div className="bg-[#f2ede8] rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-[#1c140d]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[16px] font-medium text-[#1c140d] leading-6">
                      {amostra.remedio}
                    </p>
                    <p className="text-[14px] text-[#94734f] leading-5">
                      {formatDate(new Date(amostra.dataValidade))}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-[#94734f]">
                Nenhum vencimento próximo
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#f2ede8] px-4 py-3">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#1c140d] rounded-sm" />
            </div>
            <span className="text-[12px] font-medium text-[#1c140d] leading-[18px]">
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