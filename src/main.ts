import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const dotenv = require('dotenv');
dotenv.config();
let PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log('app running at ', PORT);
  });
}
bootstrap();
