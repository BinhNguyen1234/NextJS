import { Module } from '@nestjs/common';
import { BinhModule } from './BinhUser';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';
const AllModule = [BinhModule];
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'Vue'),
    }),
    RouterModule.register([{ path: 'binh', module: BinhModule }]),
    ...AllModule,
  ],
})
export class AppModule {}
