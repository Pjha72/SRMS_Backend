import express from "express";
import {
  facultyLogin,
  updatedPassword,
  updateFaculty,
  createTest,
  getTest,
  uploadMarks,
  markAttendance,
  addOneStudent,
  getOneStudent,
  getAlllStudent,
  deleteOneStudent,
} from "../controller/facultyController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", facultyLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateFaculty);
router.post("/createtest", auth, createTest);
router.post("/gettest", auth, getTest);

router.post("/uploadmarks", auth, uploadMarks);
router.post("/markattendance", auth, markAttendance);

router.get("/getallstudent", auth, getAlllStudent);
router.post("/addstudent", auth, addOneStudent);
router.post("/getstudent", auth, getOneStudent);
router.post("/deletestudent", auth, deleteOneStudent);

export default router;
