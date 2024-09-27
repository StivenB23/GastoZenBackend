import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

import { environmentConfig } from "../config/environment.js";
environmentConfig()

export const generateTokenJWT = (payload, timeExpiration = '24hr') => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: timeExpiration });
    return token;
}

export const getPayloadToken = (token) => {
    try {
        const tokenValidated = jwt.verify(token, process.env.SECRET_KEY);
        return tokenValidated;
    } catch (error) {
        throw createHttpError(401, "Token Invalido")
    }
}

export const validateToken = async (token) => {
    try {
        const isValid = jwt.verify(token, process.env.SECRET_KEY);
        console.log(isValid);
        
        return isValid;
    } catch (error) {
        throw createHttpError(401, "Token Invalido")
    }
}