import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Patient extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Date })
  dob: Date;

  @Prop({ required: true, maxlength: 1 })
  gender: string;

  @Prop({ required: true })
  bloodType: string;

  @Prop({ required: true, minlength: 9, maxlength: 9 })
  mobileNumber: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
