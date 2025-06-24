import axios from "axios";

// BASE URL
const BASE_URL = "http://localhost:3000/api/users";

// TYPES
interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ContentData {
  title: string;
  link: string;
  type: string;
}


// API FUNCTIONS

// Sign Up User
export const signupUser = async (data: SignupData) => {
  const response = await axios.post(`${BASE_URL}/signup`, data);
  return response.data;
};

// Login User
export const loginUser = async (data: LoginData) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};

// Get All Content
export const getContent = async ( token : string ) => {
  const response = await axios.get(`${BASE_URL}/content`,{
    headers : {
      Authorization : `Bearer ${token}`,
    }
  });
  return response.data.content;
};

// Add New Content
export const addContent = async (data: ContentData, token: string) => {
  const response = await axios.post(`${BASE_URL}/content`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteContent = async (_id: string, token: string) => {
  const res = await axios.delete(`${BASE_URL}/content`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: _id, 
    },
  });

  return res.data;
};