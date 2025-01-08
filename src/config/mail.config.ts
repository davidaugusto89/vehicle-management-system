import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.MAIL_HOST || 'localhost',
  port: parseInt(process.env.MAIL_PORT, 10) || 1025,
  username: process.env.MAIL_USERNAME || null,
  password: process.env.MAIL_PASSWORD || null,
  from: {
    address: process.env.MAIL_FROM_ADDRESS || 'noreply@example.com',
    name: process.env.MAIL_FROM_NAME || 'Example App',
  },
}));
