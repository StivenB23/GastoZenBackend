import { Router } from "express";
import { createUser } from "../../controller/user.controller.js";

const router = Router();
router.get('/', () => { console.log(`sss`); })
router.post('/users', createUser)
router.post('/expenses/categories', createUser)
router.post('/expenses/check-limit', createUser)

export default router;