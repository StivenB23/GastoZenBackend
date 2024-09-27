import { responseErrors } from "../helper/handleErrors.js";
import { getPayloadToken } from "../helper/token.js";
import { getActivitiesSpendService, getLastSpendUserService, getSpendsByCategoriesService, getSpendUserByIdService, registerSpendService } from "../services/spend.service.js";

export const getSpendUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const responseRequest = await getSpendUserByIdService(id)
        res.status(200).json(responseRequest);
    } catch (error) {
        console.log(error.message);
        responseErrors(error, res)
    }
}

export const registerSpend = async (req, res) => {
    try {
        const { sub } = getPayloadToken(req.headers.authorization.split(" ").pop())
        const data = req.body;
        data.user = sub;
        const responseRequest = await registerSpendService(data)
        res.status(202).json(responseRequest);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const spendsForCategories = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        const responseRequest = await getSpendsByCategoriesService(id)
        res.status(200).json(responseRequest);
    } catch (error) {
        console.log(error.message);
        responseErrors(error, res)
    }
}

export const lastSpendUser = async (req, res) => {
    try {
        const { id } = req.params;
        const responseRequest = await getLastSpendUserService(id)
        res.status(200).json(responseRequest);
    } catch (error) {
        console.log(error.message);
        responseErrors(error, res)
    }
}

export const activitiesSpendUser = async (req, res) => {
    try {
        const { id } = req.params;
        const responseRequest = await getActivitiesSpendService(id)
        res.status(200).json(responseRequest);
    } catch (error) {
        console.log(error.message);
        responseErrors(error, res)
    }
}