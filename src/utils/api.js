import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => await axios.get(API_URL);
export const addUser = async (data) => await axios.post(API_URL, data);
export const updateUser = async (id, data) =>
  await axios.put(`${API_URL}/${id}`, data);
export const deleteUser = async (id) => await axios.delete(`${API_URL}/${id}`);
