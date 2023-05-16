import axios from "axios";

export const getPetsRequests = async () => await axios.get("/api/v1/pets");

export const getPetRequests = async (id) =>
  await axios.get(`/api/v1/pets/${id}`);

export const createPetRequest = async (pet) =>
  await axios.post("/api/v1/pets", pet);

export const updatePetRequest = async (id, pet) =>
  await axios.put(`/api/v1/pets/${id}`, pet);

export const deletePetRequest = async (id) =>
  await axios.delete(`/api/v1/pets/${id}`);
