import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersSchema = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  fname: string;

  @Prop()
  lname: string;

  @Prop({ required: true })
  accesstype: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(User);