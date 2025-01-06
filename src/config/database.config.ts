import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST', 'localhost'),
  port: parseInt(configService.get('POSTGRES_PORT', '5432')),
  username: configService.get('POSTGRES_USER', 'admin'),
  password: configService.get('POSTGRES_PASSWORD', 'admin123'),
  database: configService.get('POSTGRES_DB', 'vehicle_management'),
  autoLoadEntities: true,
  synchronize: false,
  migrations: ['dist/src/database/migrations/*.js'],
});
