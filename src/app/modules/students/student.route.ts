import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();


router.post("/create-student",StudentController.createStudent)

router.get("/all-student",StudentController.getAllStudent)




export const StudentRoutes = router;