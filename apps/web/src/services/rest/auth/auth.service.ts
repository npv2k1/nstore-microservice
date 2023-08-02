import { BaseService } from '../base-service';
import { LoginDTO } from './dto/login.dto';
import { SignupDTO } from './dto/signup.dto';

class Auth extends BaseService {
  getMe() {
    return this.http.get(`${this.basePath}/me`).then((res) => res.data);
  }

  login(data: LoginDTO) {
    return this.http.post(`${this.basePath}/login`, data).then((res) => res.data);
  }
  signup(data: SignupDTO) {
    return this.http.post<Token>(`${this.basePath}/register`, data).then((res) => res.data);
  }
}

export const AuthService = new Auth('auth');
