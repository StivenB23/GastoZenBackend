import { Router } from "express";
import { activitiesSpendUser, getSpendUserById, lastSpendUser, registerSpend, spendsForCategories } from "../../controller/spend.controller.js";
import { autentication } from "../../middleware/autentication.middleware.js";

const router = Router();
router.get('/', () => { console.log(`sss`); })
router.post('/outgoings',autentication, registerSpend)
router.get('/outgoings/user/:id',autentication, getSpendUserById)
router.get('/outgoings/user/:id/last',autentication, lastSpendUser)
router.get('/outgoings/user/:id/categories/report',autentication, spendsForCategories)
router.get('/outgoings/user/:id/activities',autentication, activitiesSpendUser)

export default router;