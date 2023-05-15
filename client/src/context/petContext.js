import {useState, createContext, useContext, useEffect} from 'react';
import {
  getPetsRequests,
  getPetRequests,
  createPetRequest,
  updatePetRequest,
  deletePetRequest,
} from '../api/pets';

const petsContext = createContext();

export const usePets = () => {
  const context = useContext(petsContext);
  return context;
};

export const PetProvider = ({children}) => {
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const res = await getPetsRequests();
      setPets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPet = async id => {
    try {
      const res = await getPetRequests(id);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const createPet = async pet => {
    try {
      const res = await createPetRequest(pet);
      setPets([...pets, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePet = async (id, pet) => {
    try {
      const res = await updatePetRequest(id, pet);
      setPets(pets.map(pet => (pet._id === id ? res.data : pet)));
    } catch (error) {
      console.error(error);
    }
  };

  const deletePet = async id => {
    const res = await deletePetRequest(id);
    if (res.status === 204) setPets(pets.filter(pet => pet._id !== id));
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <petsContext.Provider value={{pets, getPets, getPet, createPet, updatePet, deletePet}}>
      {children}
    </petsContext.Provider>
  );
};
