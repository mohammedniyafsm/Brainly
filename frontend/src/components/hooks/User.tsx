import { useMutation, useQuery } from "@tanstack/react-query";
import {
  loginUser,
  signupUser,
  getContent,
  addContent,
  deleteContent,
} from "../api/authApi";

interface DeletePayload {
  id: string;
  token: string;
}


// Signup Hook
export const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,
  });
};

// Login Hook
export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

// Get Content Hook
export const useContentData = ( data : { token : string } ) => {
  return useQuery({
    queryKey: ["content"],
    queryFn: ()=> getContent(data.token),
  });
};

// Add Content Hook
export const useAddcontent = () => {
  return useMutation({
    mutationFn: (data: {
      title: string;
      link: string;
      type: string;
      token: string;
    }) => addContent(data, data.token), // ✅ Use this if token is a separate param
  });
};

export const useDeleteContent = () => {
  return useMutation({
    mutationFn: ({ id, token }: DeletePayload) => deleteContent(id, token),
  });
};