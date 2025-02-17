import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/category";

const router = Router();

// Route to get all categories
router.get("/category", getAllCategories);

// Route to add a new category
router.post("/category", createCategory);

export default router;
