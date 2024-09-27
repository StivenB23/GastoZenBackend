import createHttpError from "http-errors";
import { validateToken } from "../helper/token.js";
import { responseErrors } from "../helper/handleErrors.js";

export const autentication = async (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        
        const tokenHeader = req.headers.authorization || "";
        if (tokenHeader == "") throw createHttpError(401, "La sesión ha expirado o el token es invalido");
        const token = tokenHeader.split(" ").pop();
        const isValidToken = await validateToken(token);
        if (!isValidToken) {
            throw createHttpError(401, "La sesión ha expirado o el token es invalido");
        }
        next();
    } catch (error) {
        responseErrors(error, res)
    }
}