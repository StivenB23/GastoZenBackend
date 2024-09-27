import { responseErrors } from "../helper/handleErrors.js";
import { createCategoryService, getAllCategoriesService } from "../services/category.service.js"

export const getCategories = async (req, res) => {
    try {
       const responseRequest = await getAllCategoriesService();
       res.status(200).send(responseRequest)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

export const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const responseRequest = await createCategoryService(data)
        res.send(responseRequest)
    } catch (error) {
        responseErrors(error, res)
    }
}