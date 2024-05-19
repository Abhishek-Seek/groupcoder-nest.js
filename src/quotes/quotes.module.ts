import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote } from './entities/quote.entity';
import { QuotesSchema } from './schemas/quotes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Quote.name, schema: QuotesSchema }])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
