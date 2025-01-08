/**
 * Enumeração que define os diferentes papéis (roles) de usuário no sistema
 *
 * Esta enumeração é utilizada para definir os papéis que um usuário pode ter,
 * como ADMIN, USER, etc. Esses papéis são utilizados para controlar o acesso
 * a diferentes partes do sistema, garantindo que apenas usuários com as permissões
 * adequadas possam acessar determinados recursos.
 */
export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
