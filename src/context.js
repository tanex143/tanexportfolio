import { createContext, useState } from 'react';
import { portfolioData } from './portfolioData';

export const contextProvider = createContext();

const Context = ({ children }) => {
  const [projectData, setProjectData] = useState(portfolioData);

  const goToTop = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <contextProvider.Provider value={{ projectData, setProjectData, goToTop }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
