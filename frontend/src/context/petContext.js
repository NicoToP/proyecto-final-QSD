import {useState, createContext, useContext, useEffect} from 'react';
import {createPetRequest, deletePetRequest, getPetsRequests} from '../api/pets';

const petsContext = createContext();

export const usePets = () => {
  const context = useContext(petsContext);
  return context;
};

export const PetProvider = ({children}) => {
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    const res = await getPetsRequests();
    setPets(res.data);
  };

  const createPet = async pet => {
    const res = await createPetRequest(pet);
    setPets([...pets, res.data]);
  };

  const deletePet = async id => {
    const res = await deletePetRequest(id);
    if (res.status === 204) setPets(pets.filter(pet => pet._id !== id));
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <petsContext.Provider value={{pets, getPets, createPet, deletePet}}>
      {children}
    </petsContext.Provider>
  );
};
