import { Module} from '@nestjs/common';
import { BinhModule } from './BinhUser';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from './database/mongo/mongoose.module';
import { join } from 'path';
import { TestModule } from './Test/test.module';
import { AuthModule } from './auth/auth.module';
const AllModule = [BinhModule, MongooseModule, TestModule, AuthModule];
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'Vue'),
    }),
    RouterModule.register([{
      path: 'user', module: BinhModule 
    },{
      path: "auth", module: AuthModule
    }]),
    ...AllModule,
  ],
})
export class AppModule {}
