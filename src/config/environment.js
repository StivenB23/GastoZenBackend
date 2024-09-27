import dotenv from "dotenv"
import { __dirname } from "../helper/fileSystemModule.js"
import { join } from "path"

dotenv.config({override:true})
const environmentConfig = () => {
    if (process.env.NODE_ENV === "dev") {
        dotenv.config({ path: join(__dirname, "../.env"),override:true })
        return ""
    }
    if (process.env.NODE_ENV === "stage") {
        dotenv.config({ path: join(__dirname, "../.env.staging"), override:true })
        return ""
    }
    throw new Error(`No se ha definido el entorno de ejecución "${process.env.NODE_ENV}"`);
}
export { environmentConfig }