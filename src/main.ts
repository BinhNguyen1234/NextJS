import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
let PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableShutdownHooks();
  await app.listen(PORT, () => {
    console.log('Application running at ', PORT);
  });
}
bootstrap();
