import { Schema, model, connect } from 'mongoose';
import { IStudent } from './student.interface';

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: ['female', 'male'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'],
  presentAddress:{type:String,required:true},
  parmenentAddress:{type:String,required:true},
  guardian:{
    fatherName:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherContactNo:{type:String,required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNo:{type:String,required:true}
  },
  localGuardian:{
    name:{type:String,required:true},
    contactNo:{type:String,required:true},
    occupation:{type:String,required:true},
    address:{type:String,required:true}
  },
  profileImage:{type:String},
  isActive:["active","blocked"]
});