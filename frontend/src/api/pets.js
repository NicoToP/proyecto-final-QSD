import axios from 'axios';

export const getPetsRequests = async () => await axios.get('/pets');
