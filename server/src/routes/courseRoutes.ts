import express from "express";
import { createCourse, deleteCourse, getCourse, listCourses, updateCourse } from "../controllers/courseControllers";
import { requireAuth } from "@clerk/express";
import multer from "multer";

const router = express.Router();
// multer stores files and images temporarily
const upload = multer({ storage: multer.memoryStorage() }) 

// endpoint(routes) for course controller
router.get("/", listCourses);
router.post("/", requireAuth(), createCourse);

router.get("/:courseId", getCourse);
router.put("/:courseId", requireAuth(), upload.single("image"), updateCourse);
router.delete("/:courseId", requireAuth(), deleteCourse);

export default router;