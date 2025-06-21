import axios from "axios";

export const signupUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post("http://localhost:3000/api/users/signup", data); 
  return res.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await axios.post("http://localhost:3000/api/users/login", data); 
  return res.data;
};