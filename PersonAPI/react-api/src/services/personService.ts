import axios from 'axios';

const API_URL = 'https://localhost:7000/api/person';

export const getPersons = () =>
  axios.get(API_URL);

export const getPerson = (id: number) =>
  axios.get(`${API_URL}/${id}`);

export const createPerson = (person: any) =>
  axios.post(API_URL, person);

export const updatePerson = (id: number, person: any) =>
  axios.put(`${API_URL}/${id}`, person);

export const deletePerson = (id: number) =>
  axios.delete(`${API_URL}/${id}`);