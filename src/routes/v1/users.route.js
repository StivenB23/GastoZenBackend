import { Router } from "express";
import { createUser } from "../../controller/user.controller.js";

const router = Router();
router.get('/', () => { console.log(`sss`); })
router.post('/users', createUser)

export default router;