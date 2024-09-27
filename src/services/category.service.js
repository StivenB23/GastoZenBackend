import { categoryModel } from "../model/category.model.js";

export const getAllCategoriesService = async () => {
    const categories = await categoryModel.find();
    return categories;
}

export const createCategoryService = async (spendData) => {
    const spendCreated = await categoryModel.create(spendData);
    return spendCreated;
}

export const uploadDataCategoryService = async () => {

    let countData = await categoryModel.countDocuments();
    if (countData === 0) {
        await categoryModel.insertMany([{ name: "Entretenimiento" }, { name: "Necesidades Básicas" }, { name: "Diversión" }, { name: "Amigos" }, { name: "Deudas" }]);
    }
}