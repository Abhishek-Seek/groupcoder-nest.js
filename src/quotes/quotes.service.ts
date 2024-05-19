import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Model } from 'mongoose';
import { Quote } from './entities/quote.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteMOdel: Model<Quote>) {}

  async create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const createdQuote = new this.quoteMOdel(createQuoteDto);
    return createdQuote.save();
  }
   async findAll() {
    return await this.quoteMOdel.find();
  }

  async findOne(id: string) {
    return await this.quoteMOdel.findById(id);
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto) {
    return await this.quoteMOdel.findByIdAndUpdate(id,updateQuoteDto);
  }

 async remove(id: string) {
    return await this.quoteMOdel.findByIdAndDelete(id);
  }
}
