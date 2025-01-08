import { User } from '../entities/user.entity';
import { Role } from 'src/enums/role.enum';

/**
 * Mock de usuário para testes.
 */
export const userMock: User = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'hashedpassword',
  role: Role.USER,
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: null,
};
