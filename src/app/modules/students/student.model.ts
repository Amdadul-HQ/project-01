import { Schema, model } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IStudentName,
} from './student.interface';

const studentNameSchema = new Schema<IStudentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentGuardianSchema = new Schema<IGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const studentLocalGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: studentNameSchema,
  gender: ['female', 'male'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmenentAddress: { type: String, required: true },
  guardian: studentGuardianSchema,
  localGuardian: studentLocalGuardianSchema,
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});

export const Student = model<IStudent>('Student', studentSchema);
