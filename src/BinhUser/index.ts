import { Module } from '@nestjs/common';
import { BinhService } from './service';
import { BinhController } from './controller';
import { TestService } from './service/test.service';
@Module({
  controllers: [BinhController],
  providers: [{
    provide: "BINH_SERVICE" ,
    useClass:   BinhService,
  }, TestService],
})
export class BinhModule {}
