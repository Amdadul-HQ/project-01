import { IStudent } from './student.interface';
import { Student } from './student.model';

const studentCreateIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id });
  return result;
};

export const StudentServices = {
  studentCreateIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
