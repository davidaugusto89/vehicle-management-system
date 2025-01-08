import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard de autenticação JWT
 *
 * Este guard é responsável por validar o token JWT nas requisições
 * e garantir que apenas usuários autenticados tenham acesso aos endpoints protegidos
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Método que realiza a validação do token JWT
   * @param context Contexto da execução contendo os dados da requisição
   * @returns Boolean indicando se o acesso é permitido
   * @throws UnauthorizedException caso o token seja inválido ou não fornecido
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // Tenta validar o token JWT usando a estratégia configurada
      const result = (await super.canActivate(context)) as boolean;
      return result;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(
        'Token de autenticação inválido ou não fornecido',
      );
    }
  }

  /**
   * Método que manipula a resposta após a validação do token
   * @param err Erro ocorrido durante a validação, se houver
   * @param user Dados do usuário extraídos do token
   * @param info Informações adicionais sobre a autenticação
   * @returns Dados do usuário autenticado
   * @throws UnauthorizedException caso ocorra algum erro na validação
   */
  handleRequest(err: any, user: any, info: any): any {
    console.log(info);
    if (err || !user) {
      throw new UnauthorizedException('Falha na autenticação');
    }
    return user;
  }
}
