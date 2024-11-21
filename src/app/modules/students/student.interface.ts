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

interface ILocalGuardian {
    name:string;
    occupation:string;
    contactNo:string;
    address:string;
}

export interface IStudent {
  id:string;
  name: IStudentName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress:string;
  parmenentAddress:string;
  guardian:IGuardian;
  localGuardian: ILocalGuardian;
  profileImage?:string;
  isActive: "active" | "blocked"
}