
import { connect } from "mongoose";
import { environmentConfig } from "./environment.js";
import { uploadDataCategoryService } from "../services/category.service.js";
environmentConfig()


const HOSTDB = process.env.MONGODB_HOST
const PORTDB = process.env.MONGODB_PORT
const database = process.env.MONGODB_DATABASE
const URI_CONNECTION = `mongodb://${HOSTDB}:${PORTDB}/${database}`;
console.log(URI_CONNECTION);

/**
 * Realiza la conexión a la base de datos.
 *
 * @function
 * @async
 * @throws {Error} Si hay un error al conectar con la base de datos.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la conexión es exitosa.
 * @author Albert Ospina
 */
async function dbConnect() {
  try {
    await connect(URI_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await uploadDataCategoryService()
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default dbConnect;
