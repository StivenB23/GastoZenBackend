import { compare, hash } from "bcrypt"

export const encryptPassword = async (password) => {
    return await hash(password, 8);
}

export const comparePassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword)
}