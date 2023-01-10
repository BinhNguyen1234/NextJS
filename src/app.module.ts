import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppHelloService } from './service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppHelloService],
})
export class AppModule {}
