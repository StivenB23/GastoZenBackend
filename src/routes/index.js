import authRouter from "./v1/auth.route.js"
import categoryRouter from "./v1/category.route.js"
import spendRouter from "./v1/spend.route.js"
import userRouter from "./v1/users.route.js"


const routes =[userRouter, spendRouter, categoryRouter, authRouter]
export const appRoutes = (app) => {
    routes.forEach((route) =>{
        app.use("/api/v1", route)
    })
}

