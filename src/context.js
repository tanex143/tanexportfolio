import { createContext, useState } from 'react';
import { portfolioData } from './portfolioData';

export const contextProvider = createContext();

const Context = ({ children }) => {
  const [projectData, setProjectData] = useState(portfolioData);

  return (
    <contextProvider.Provider value={{ projectData, setProjectData }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
