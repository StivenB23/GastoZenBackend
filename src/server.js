import express, { json } from "express";
import { appRoutes } from "./routes/index.js";
import dbConnect from "./config/database.js";
import { environmentConfig } from "./config/environment.js";
import cors from "cors";

environmentConfig()
const PORT = process.env.PORT || 3000;
const server = express()
server.use(json())
server.use(cors());
dbConnect()
appRoutes(server)

server.listen(PORT, ()=>console.log(`Gasto Zen Run in Port ${PORT} `))