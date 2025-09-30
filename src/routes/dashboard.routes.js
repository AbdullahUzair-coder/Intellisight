import express from "express";
import { dashboardpage,dashboardData, studentsPage, teachersPage, zonesPage, logsPage } from "../controllers/dashboard.controller.js";
import { authMiddleware } from "../bussiness/middlewares/authentication.js";

const router = express.Router();

router.get("/api/dashboard", authMiddleware, dashboardData);
router.get("/dashboard", authMiddleware,dashboardpage);
router.get("/students", authMiddleware, studentsPage);
router.get("/teachers", authMiddleware, teachersPage);
router.get("/zones", authMiddleware, zonesPage);
router.get("/logs", authMiddleware, logsPage);

export default router;
