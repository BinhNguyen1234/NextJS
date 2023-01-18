import { Get, Controller } from '@nestjs/common';
import { MongooseConnection } from 'src/database/mongo/mongoose.connection';
@Controller('test')
export class TestController {
  private DbService;
  constructor(dbService: MongooseConnection) {
    this.DbService = dbService;
  }
  @Get('check')
  isOk() {
    return 'this route ok';
  }
  @Get('close')
  closeConntection() {
    this.DbService.close();
  }
  @Get('connect')
  connectDb() {
    this.DbService.connect();
  }
}
