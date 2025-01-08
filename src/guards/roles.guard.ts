import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

/**
 * Guard de autorização baseado em roles (papéis)
 *
 * Este guard é responsável por verificar se o usuário possui as roles necessárias
 * para acessar determinado endpoint protegido
 */
@Injectable()
export class RolesGuard implements CanActivate {
  /**
   * Construtor do RolesGuard
   * @param reflector Serviço do NestJS para acessar metadados de decorators
   */
  constructor(private reflector: Reflector) {}

  /**
   * Método que verifica se o usuário tem permissão para acessar o recurso
   * @param context Contexto da execução contendo os dados da requisição
   * @returns Boolean indicando se o acesso é permitido
   */
  canActivate(context: ExecutionContext): boolean {
    // Obtém as roles requeridas do decorator
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Se não houver roles definidas, permite o acesso
    if (!requiredRoles) {
      return true;
    }

    // Obtém o usuário da requisição
    const { user } = context.switchToHttp().getRequest();

    // Verifica se o usuário possui pelo menos uma das roles requeridas
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
