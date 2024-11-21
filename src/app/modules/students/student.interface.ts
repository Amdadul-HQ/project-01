import { Schema, model, connect } from 'mongoose';



interface IStudentName{
    firstName:string,
    middleName:string,
    lastName:string
}

interface IGuardian {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string
}

interface IStudent {
  name: IStudentName;
  email: string;
  gender: 'male' | 'female';
  bateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress:string;
  parmenentAddress:string;
  guardian:IGuardian;
}