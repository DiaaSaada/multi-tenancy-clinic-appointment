import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from '../schemas/patient.schema';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    const createdPatient = new this.patientModel(createPatientDto);
    return createdPatient.save();
  }

  findAll() {
    return this.patientModel.find().exec();
  }

  findOne(id: string) {
    return this.patientModel.findById(id).exec();
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const pat = await this.patientModel.findById(id).exec();
    pat.gender = 'F';
    await pat.save();
    return pat;
  }

  remove(id: string) {
    return this.patientModel.deleteOne({ id }).exec();
  }
}
