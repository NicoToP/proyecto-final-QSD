import {useState, createContext, useContext} from 'react';

const petsContext = createContext();

export const usePets = () => {
  const context = useContext(petsContext);
  return context;
};

export const PetProvider = ({children}) => {
  const [pets, setPets] = useState([]);

  return <petsContext.Provider value={{pets}}>{children}</petsContext.Provider>;
};
