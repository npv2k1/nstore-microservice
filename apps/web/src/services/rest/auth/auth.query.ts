import { useMutation } from "@tanstack/react-query";
import { AuthService } from "./auth.service";
import { LoginDTO } from "./dto/login.dto";
import { SignupDTO } from "./dto/signup.dto";

export const useLoginMutation = () => {
  return useMutation((input: LoginDTO) => {
    return AuthService.login(input);
  });
};

export const useSignupMutation = () => {
  return useMutation((input: SignupDTO) => {
    return AuthService.signup(input);
  });
};
