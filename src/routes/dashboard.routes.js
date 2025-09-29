import express from "express";
import { dashboardPage, studentsPage, teachersPage, zonesPage, logsPage } from "../controllers/dashboard.controller.js";
import { authMiddleware } from "../bussiness/middlewares/authentication.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, dashboardPage);
router.get("/students", authMiddleware, studentsPage);
router.get("/teachers", authMiddleware, teachersPage);
router.get("/zones", authMiddleware, zonesPage);
router.get("/logs", authMiddleware, logsPage);

export default router;
