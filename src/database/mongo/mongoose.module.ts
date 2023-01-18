import { Module } from '@nestjs/common';
import { MongooseConnection } from './mongoose.connection';
@Module({
  providers: [MongooseConnection],
  exports: [MongooseConnection],
})
export class MongooseModule {}
