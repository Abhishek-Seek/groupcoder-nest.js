import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesModule } from './quotes/quotes.module';
import { UsersModule } from './users/users.module';

@Module({
  // mongodb+srv://Abhi:svqKBgpjToe3vQqj@cluster0.mongodb.net/<database>?retryWrites=true&w=majority'
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/groupcoderDB'), QuotesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
