import { of } from 'rxjs';
import users from '../../assets/users.json';

export class UserService {
  getUsers() {
    return of(users);
  }
}