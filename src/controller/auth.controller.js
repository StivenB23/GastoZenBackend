import { responseErrors } from "../helper/handleErrors.js";
import { loginService } from "../services/auth.service.js";

export const login = async (req, res) => {
    try {
        const credentials = req.body;
        const responseRequest = await loginService(credentials);
        res.status(200).json(responseRequest);
    } catch (error) {
        responseErrors(error, res)
    }
}