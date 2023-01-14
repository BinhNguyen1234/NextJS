import { Module } from '@nestjs/common';
import { MongooseService } from './service/mongoose.service';
@Module({
  providers: [MongooseService],
  exports: [MongooseService],
})
export class MongooseModule {}
