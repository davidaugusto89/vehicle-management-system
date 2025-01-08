import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Controlador responsável pelas operações relacionadas aos usuários.
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Cria um novo usuário.
   * @param createUserDto Dados do usuário a ser criado.
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Retorna todos os usuários.
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Retorna um usuário pelo ID.
   * @param id ID do usuário.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   * Atualiza os dados de um usuário.
   * @param id ID do usuário.
   * @param updateUserDto Dados atualizados do usuário.
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /**
   * Remove um usuário pelo ID.
   * @param id ID do usuário.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
