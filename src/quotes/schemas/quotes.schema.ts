import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuotesSchema = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop({ required: true })
  quote: string;

  @Prop()
  auther: string;

  @Prop({ required: true })
  writter: string;
}

export const QuotesSchema = SchemaFactory.createForClass(Quote);