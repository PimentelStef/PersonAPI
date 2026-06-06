import axios from "axios";

const API_URL = "http://localhost:5284/api/person";

export const getPersons = () => axios.get(API_URL);

export const getPerson = (id: number) =>
    axios.get(`${API_URL}/${id}`);

export const createPerson = (data: any) =>
    axios.post(API_URL, data);

export const updatePerson = (id: number, data: any) =>
    axios.put(`${API_URL}/${id}`, data);

export const deletePerson = (id: number) =>
    axios.delete(`${API_URL}/${id}`);