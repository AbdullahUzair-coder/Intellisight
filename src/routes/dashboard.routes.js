import express from "express";
import { dashboardpage,dashboardData, studentsPage, teachersPage, zonesPage, logsPage ,getStudentLogs,getStudentLogsById,getTeacherLogsById,getTeacherLogs} from "../controllers/dashboard.controller.js";
import { authMiddleware } from "../bussiness/middlewares/authentication.js";

const router = express.Router();

router.get("/api/dashboard", authMiddleware, dashboardData);
router.get("/dashboard", authMiddleware,dashboardpage);

router.get("/students", authMiddleware, studentsPage);
router.get("/api/student-logs", authMiddleware, getStudentLogs);
router.get("/api/student-logs/:id", authMiddleware, getStudentLogsById);

router.get("/teachers", authMiddleware, teachersPage);
router.get("/api/teacher-logs", authMiddleware, getTeacherLogs);
router.get("/api/teacher-logs/:id", authMiddleware, getTeacherLogsById);

router.get("/zones", authMiddleware, zonesPage);
router.get("/logs", authMiddleware, logsPage);


export default router;
