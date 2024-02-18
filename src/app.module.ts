import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

const MONGO_URI: string = process.env.MONGO_URI!;

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot('mongodb://mongo:53435e1HFA-25BB215B3D3aCfC6FCC5c@roundhouse.proxy.rlwy.net:11611',{
    //   dbName: 'auth-db',
    // }),
    MongooseModule.forRoot(MONGO_URI, {
    dbName: process.env.MONGO_DB_NAME,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
