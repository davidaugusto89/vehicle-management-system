import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userMock } from './mocks/user.mock';

/**
 * Testes unitários para o controlador de usuários.
 */
describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(userMock),
            findAll: jest.fn().mockResolvedValue([userMock]),
            findOne: jest.fn().mockResolvedValue(userMock),
            update: jest.fn().mockResolvedValue({ affected: 1 }),
            remove: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('deve criar um usuário', async () => {
    const result = await controller.create(userMock);
    expect(result).toEqual(userMock);
  });

  it('deve retornar todos os usuários', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([userMock]);
  });

  it('deve retornar um usuário pelo ID', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(userMock);
  });

  it('deve atualizar um usuário', async () => {
    const result = await controller.update('1', userMock);
    expect(result).toEqual({ affected: 1 });
  });

  it('deve remover um usuário', async () => {
    const result = await controller.remove('1');
    expect(result).toEqual({ affected: 1 });
  });
});
