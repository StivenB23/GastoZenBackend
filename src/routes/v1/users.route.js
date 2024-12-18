import { Router } from "express";
import { createUser } from "../../controller/user.controller.js";

const router = Router();
router.get('/', () => { console.log(`sss`); })
router.post('/users', createUser)
router.post('/expenses/categories', createUser)
router.post('/expenses/check-limit', createUser)
router.post('/expenses/upload', createUser)
router.post('/auth/forgot-password', createUser)
router.post('/incomes', createUser)

export default router;