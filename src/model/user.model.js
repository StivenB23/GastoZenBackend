import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    isDeleted: { type: Boolean, default: false },

}, { versionKey: false, timestamps: true });

const userModel = model("users", userSchema);
export default userModel