import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, Amostra, Paciente, Lembrete, Entrega } from '../types';

type AppAction = 
  | { type: 'ADD_AMOSTRA'; payload: Amostra }
  | { type: 'UPDATE_AMOSTRA_QUANTIDADE'; payload: { id: string; quantidade: number } }
  | { type: 'ADD_PACIENTE'; payload: Paciente }
  | { type: 'ADD_LEMBRETE'; payload: Lembrete }
  | { type: 'ADD_ENTREGA'; payload: Entrega };

const initialState: AppState = {
  amostras: [
    {
      id: '1',
      remedio: 'Amostra de creme para eczema',
      substancia: 'Betametasona',
      categoria: 'Corticoide',
      tipo: 'Amostra',
      laboratorio: 'Bayer',
      representante: 'João Silva',
      quantidade: 5,
      dataValidade: new Date('2024-07-20'),
      dataRecebimento: new Date('2024-01-15'),
    },
    {
      id: '2',
      remedio: 'Amostra de loção para pele seca',
      substancia: 'Ureia',
      categoria: 'Hidratante',
      tipo: 'Amostra',
      laboratorio: 'La Roche-Posay',
      representante: 'Maria Santos',
      quantidade: 3,
      dataValidade: new Date('2024-07-25'),
      dataRecebimento: new Date('2024-02-10'),
    },
    {
      id: '3',
      remedio: 'Amostra de protetor solar',
      substancia: 'Óxido de Zinco',
      categoria: 'Protetor Solar',
      tipo: 'Amostra',
      laboratorio: 'Vichy',
      representante: 'Carlos Oliveira',
      quantidade: 8,
      dataValidade: new Date('2024-08-15'),
      dataRecebimento: new Date('2024-03-05'),
    },
    {
      id: '4',
      remedio: 'Amostra de tratamento para acne',
      substancia: 'Adapaleno',
      categoria: 'Anti-acne',
      tipo: 'Amostra',
      laboratorio: 'Galderma',
      representante: 'Ana Costa',
      quantidade: 2,
      dataValidade: new Date('2024-08-20'),
      dataRecebimento: new Date('2024-03-20'),
    },
  ],
  pacientes: [
    { id: '1', nome: 'Maria Silva' },
    { id: '2', nome: 'João Santos' },
    { id: '3', nome: 'Ana Costa' },
  ],
  lembretes: [
    {
      id: '1',
      titulo: 'Amostra de creme para eczema',
      data: new Date('2024-07-20'),
      hora: '14:00',
      paciente: 'Maria Silva',
    },
    {
      id: '2',
      titulo: 'Amostra de loção para pele seca',
      data: new Date('2024-07-25'),
      hora: '10:30',
      paciente: 'João Santos',
    },
  ],
  entregas: [],
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_AMOSTRA':
      return {
        ...state,
        amostras: [...state.amostras, action.payload],
      };
    case 'UPDATE_AMOSTRA_QUANTIDADE':
      return {
        ...state,
        amostras: state.amostras.map(amostra =>
          amostra.id === action.payload.id
            ? { ...amostra, quantidade: action.payload.quantidade }
            : amostra
        ),
      };
    case 'ADD_PACIENTE':
      return {
        ...state,
        pacientes: [...state.pacientes, action.payload],
      };
    case 'ADD_LEMBRETE':
      return {
        ...state,
        lembretes: [...state.lembretes, action.payload],
      };
    case 'ADD_ENTREGA':
      return {
        ...state,
        entregas: [...state.entregas, action.payload],
      };
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  getAmostrasVencendoEm: (dias: number) => Amostra[];
  getProximosLembretes: () => Lembrete[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getAmostrasVencendoEm = (dias: number): Amostra[] => {
    const hoje = new Date();
    const dataLimite = new Date();
    dataLimite.setDate(hoje.getDate() + dias);
    
    return state.amostras.filter(amostra => {
      const dataValidade = new Date(amostra.dataValidade);
      return dataValidade <= dataLimite && dataValidade >= hoje;
    });
  };

  const getProximosLembretes = (): Lembrete[] => {
    const hoje = new Date();
    return state.lembretes
      .filter(lembrete => new Date(lembrete.data) >= hoje)
      .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
      .slice(0, 5);
  };

  return (
    <AppContext.Provider value={{ 
      state, 
      dispatch, 
      getAmostrasVencendoEm,
      getProximosLembretes 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};