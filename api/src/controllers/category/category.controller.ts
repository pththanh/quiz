import { Request, Response } from "express";
import { Category, ICategory } from "../../models/category.model";
import { ErrorResponse, ResponseData } from "../../types/types";

export async function getAllCategories(
  req: Request,
  res: Response<ResponseData<ICategory[]> | ErrorResponse>
): Promise<void> {
  try {
    const categories = await Category.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch categories",
    });
  }
}

export async function createCategory(
  req: Request,
  res: Response<ResponseData<ICategory> | ErrorResponse>
): Promise<void> {
  try {
    const { name, description } = req.body;

    if (!name) {
      res.status(400).json({
        success: false,
        error: "Category name is required",
      });
    }

    const category = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create category",
    });
  }
}
