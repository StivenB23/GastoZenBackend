import { encryptPassword } from "../helper/passwords.js";
import userModel from "../model/user.model.js"

export const getAllUsersService = async () => {
    const users = await userModel.find();
    return users;
}

export const getUserByIdService = async (userId) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export const getUserByEmailService = async (email) => {
    const user = await userModel.findOne({email});
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export const createUserService = async (userData) => {
    const user = new userModel(userData);
    user.password = await encryptPassword(user.password)
    const { password, userCreated } = await user.save();
    return userCreated
}

export const updateUserService = async (userId, updatedUserData) => {
    const user = await userModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export const deleteUserService = async (userId) => {
    const user = await userModel.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}