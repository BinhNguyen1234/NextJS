import mongoose from 'mongoose';
import { Injectable, Scope } from '@nestjs/common';
@Injectable({ scope: Scope.DEFAULT })
export class MongooseService {
  connection = mongoose.connection;
  constructor() {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DBNAME,
    });
    this.connection
      .on('open', () => {
        console.log('Database connection: open');
      })
      .on('connecting', () => {
        console.log('connecting to database again');
      })
      .on('connected', () => {
        console.log('Database connection: connected');
      })
      .on('close', () => {
        console.log('Database connection: close');
      })
      .on('disconnecting', () => {
        console.log('Database connection: disconnecting');
      })
      .on('disconnected', () => {
        console.log('Database connection: disconnected');
      })
      .on('reconnected', () => {
        console.log('Database connection: reconnected');
      })
      .on('fullsetup', () => {
        console.log('Database connection: fullsetup');
      })
      .on('all', () => {
        console.log('Database connection: all');
      })
      .on('error', () => {
        console.log('MongoDB connection: error:');
      });
  }
  async connect() {
    mongoose
      .connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DBNAME })
      .catch((e) => [console.log('cannot not estashblished connect')]);
  }
  async close() {
    this.connection.close().catch((e) => {
      console.log('cannot close connect');
    });
  }
}
