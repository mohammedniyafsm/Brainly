import {  useMutation, useQuery } from "@tanstack/react-query";
import { loginUser, signupUser ,getContent} from "../api/authApi";

export const useSignup = () => {
  return useMutation({
    mutationFn : signupUser,
  })
};

export const useLogin = () => {
    return useMutation ({
        mutationFn : loginUser,
    })
}

export const useContentData  = () => {
  return useQuery ({
    queryKey : ['content'],
    queryFn : getContent,
  })
}