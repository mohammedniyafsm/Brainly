import { useMutation } from "@tanstack/react-query";
import { loginUser, signupUser } from "../api/authApi";

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