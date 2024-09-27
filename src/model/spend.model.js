import { model, Schema, Types } from "mongoose";

const spendSchema = new Schema({
    amount: Number,
    detail: String,
    category: { type: Types.ObjectId, ref: "categories" },
    user: { type: Types.ObjectId, ref: "user" },
    date: Date,
}, { versionKey: false, timestamps: true });

const spendModel = model("outgoings", spendSchema)

export { spendModel }