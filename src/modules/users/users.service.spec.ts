import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { userMock } from './mocks/user.mock';

/**
 * Testes unitários para o serviço de usuários.
 */
describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn().mockReturnValue(userMock),
            save: jest.fn().mockResolvedValue(userMock),
            find: jest.fn().mockResolvedValue([userMock]),
            findOne: jest.fn().mockResolvedValue(userMock),
            update: jest.fn().mockResolvedValue({ affected: 1 }),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('deve criar um usuário', async () => {
    const result = await service.create(userMock);
    expect(result).toEqual(userMock);
  });

  it('deve retornar todos os usuários', async () => {
    const result = await service.findAll();
    expect(result).toEqual([userMock]);
  });

  it('deve retornar um usuário pelo ID', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(userMock);
  });

  it('deve atualizar um usuário', async () => {
    const result = await service.update(1, userMock);
    expect(result).toEqual({ affected: 1 });
  });

  it('deve remover um usuário', async () => {
    const result = await service.remove(1);
    expect(result).toEqual({ affected: 1 });
  });
});
