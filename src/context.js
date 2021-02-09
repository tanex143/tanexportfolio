import { createContext, useState } from 'react';
import { portfolioData } from './portfolioData';

export const contextProvider = createContext();

const Context = ({ children }) => {
  const [projectData, setProjectData] = useState(portfolioData);
  const [menubars, setMenuBars] = useState(false);

  const goToTop = () => {
    return window.scrollTo(0, 0);
  };

  // to view only 3 project in home page.
  const splicingData = () => {
    const data = [...projectData];
    let spliced = data.splice(0, 3);

    return spliced;
  };

  return (
    <contextProvider.Provider
      value={{
        projectData,
        setProjectData,
        goToTop,
        menubars,
        setMenuBars,
        splicingData,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
