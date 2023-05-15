import axios from 'axios';

export const getPetsRequests = async () => await axios.get('/pets');

export const getPetRequests = async id => await axios.get(`/pets/${id}`);

export const createPetRequest = async pet => await axios.post('/pets', pet);

export const updatePetRequest = async (id, pet) => await axios.put(`/pets/${id}`, pet);

export const deletePetRequest = async id => await axios.delete(`/pets/${id}`);
