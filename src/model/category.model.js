import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    name: String,
    detail: String
}, { versionKey: false, timestamps: true });

const categoryModel = model("categories", categorySchema)

export { categoryModel }