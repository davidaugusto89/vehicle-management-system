import { SetMetadata } from '@nestjs/common';

/**
 * Chave utilizada para armazenar as roles no metadata
 */
export const ROLES_KEY = 'roles';

/**
 * Decorator para definir as roles necessárias para acessar um recurso
 * @param roles Lista de roles (papéis) que têm permissão para acessar o recurso
 * @returns Função decorator que define as roles no metadata do método ou classe
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
