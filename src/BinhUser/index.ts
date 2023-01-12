import { Module } from '@nestjs/common';
import { BinhService } from './service';
import { BinhController } from './controller';
@Module({
  controllers: [BinhController],
  providers: [BinhService],
})
export class BinhModule {}
