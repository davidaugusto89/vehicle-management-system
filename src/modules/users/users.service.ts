import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Serviço responsável pela lógica de negócio relacionada aos usuários.
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  /**
   * Cria um novo usuário.
   * @param createUserDto Dados do usuário a ser criado.
   */
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  /**
   * Retorna todos os usuários.
   */
  findAll() {
    return this.usersRepository.find();
  }

  /**
   * Retorna um usuário pelo ID.
   * @param id ID do usuário.
   */
  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  /**
   * Atualiza os dados de um usuário.
   * @param id ID do usuário.
   * @param updateUserDto Dados atualizados do usuário.
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  /**
   * Remove um usuário pelo ID.
   * @param id ID do usuário.
   */
  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
