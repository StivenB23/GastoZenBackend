import { comparePassword } from "../helper/passwords.js";
import { generateTokenJWT } from "../helper/token.js";
import { getUserByEmailService } from "./user.service.js";

export const loginService = async (credentials) => {
    const { email, password } = credentials;
    const user = await getUserByEmailService(email);
    const isPasswordCorrected = await comparePassword(password, user.password);
    if (!isPasswordCorrected) {
        throw new Error("Invalid credentials");
    }
    const payload = {
        sub: user._id
    }
    const token = generateTokenJWT(payload)
    let userFiltered  = {
        id: user._id,
        email: user.email,
        name: user.name,
        lastname: user.lastname
    }
    return { "token": token, user: userFiltered };
}