export interface Amostra {
  id: string;
  remedio: string;
  substancia: string;
  categoria: string;
  tipo: 'Original' | 'Amostra';
  laboratorio: string;
  representante: string;
  quantidade: number;
  dataValidade: Date;
  dataRecebimento: Date;
}

export interface Paciente {
  id: string;
  nome: string;
}

export interface Lembrete {
  id: string;
  titulo: string;
  data: Date;
  hora: string;
  paciente?: string;
  amostra?: string;
}

export interface Entrega {
  id: string;
  paciente: string;
  amostra: string;
  quantidade: number;
  localEntrega: string;
  data: Date;
  lembrete?: Lembrete;
}

export type LocalEntrega = 'Clínica' | 'Posto de Saúde' | 'Família' | 'Universidade';

export interface AppState {
  amostras: Amostra[];
  pacientes: Paciente[];
  lembretes: Lembrete[];
  entregas: Entrega[];
}