import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent =async (req:Request,res:Response) =>{

    try{
        const student = req.body.student;

    const result = await StudentServices.studentCreateIntoDB(student);

    res.status(200).json({
        success:true,
        message:"Student Created Successfully",
        data: result
    })
    }
    catch(error){
    res.status(500).json({
        success:false,
        message:"Something want worng"
    })
    }

}

const getAllStudent = async(req:Request,res:Response)=>{
    try{
        const result = await StudentServices.getAllStudentFromDB();
        res.status(200).json({
            sussess:true,
            message:"All student date",
            data: result
        })
    }
    catch(error){
         res.status(500).json({
           success: false,
           message: 'Something want worng',
         });
    }
}


export const StudentController = {
    createStudent,
    getAllStudent
}