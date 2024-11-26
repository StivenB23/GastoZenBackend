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

export const getExpensesByCategoryService = async (userId) => {
    const expenses = await expenseModel.aggregate([
        { $match: { userId } },
        { $group: { _id: "$category", total: { $sum: "$amount" } } }
    ]);
    return expenses;
};

export const checkMonthlyLimitService = async (userId, limit) => {
    const startOfMonth = new Date(new Date().setDate(1));
    const totalExpenses = await expenseModel.aggregate([
        { $match: { userId, date: { $gte: startOfMonth } } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const total = totalExpenses[0]?.total || 0;
    if (total > limit) {
        return { limitExceeded: true, total };
    }
    return { limitExceeded: false, total };
};

export const uploadExpensesCSVService = async (filePath, userId) => {
    const expenses = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on("data", (row) => {
                expenses.push({ ...row, userId });
            })
            .on("end", async () => {
                await expenseModel.insertMany(expenses);
                resolve(expenses);
            })
            .on("error", reject);
    });
};