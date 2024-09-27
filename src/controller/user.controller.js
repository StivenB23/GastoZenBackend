import { responseErrors } from "../helper/handleErrors.js";
import { createUserService } from "../services/user.service.js"

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const responseRequest = await createUserService(data)
        res.status(202).json(responseRequest);
    } catch (error) {
        responseErrors(error, res)
    }
}