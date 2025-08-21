import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Dashboard } from './components/Dashboard';
import { ReceberAmostra } from './components/ReceberAmostra';
import { EntregarAmostra } from './components/EntregarAmostra';
import { Inventario } from './components/Inventario';
import { Relatorios } from './components/Relatorios';

type Screen = 'dashboard' | 'receber' | 'entregar' | 'inventario' | 'relatorios';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'receber':
        return <ReceberAmostra onNavigate={handleNavigate} />;
      case 'entregar':
        return <EntregarAmostra onNavigate={handleNavigate} />;
      case 'inventario':
        return <Inventario onNavigate={handleNavigate} />;
      case 'relatorios':
        return <Relatorios onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <AppProvider>
      <div className="size-full max-w-md mx-auto bg-white overflow-hidden">
        {renderScreen()}
      </div>
    </AppProvider>
  );
}