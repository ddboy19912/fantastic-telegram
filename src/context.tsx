import * as React from 'react';

export type ContextType = {
  sideModal: boolean;
  setSideModal: (value: boolean) => void;
  currentHero: string;
  setCurrentHero: (value: string) => void;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sideModal, setSideModal] = React.useState(false);
  const [currentHero, setCurrentHero] = React.useState('Code');

  return (
    <AppContext.Provider
      value={{ setSideModal, sideModal, currentHero, setCurrentHero }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
