import axios from 'axios';

export const getPetsRequests = async () => await axios.get('/pets');

export const createPetRequest = async pet => await axios.post('/pets', pet);

export const deletePetRequest = async id => await axios.delete('/pets/' + id);
