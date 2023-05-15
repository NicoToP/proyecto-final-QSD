import axios from 'axios';

export const getPetsRequests = async () => await axios.get('/v1/api/pets');

export const getPetRequests = async id => await axios.get(`/v1/api/pets/${id}`);

export const createPetRequest = async pet => await axios.post('/v1/api/pets', pet);

export const updatePetRequest = async (id, pet) => await axios.put(`/v1/api/pets/${id}`, pet);

export const deletePetRequest = async id => await axios.delete(`/v1/api/pets/${id}`);
