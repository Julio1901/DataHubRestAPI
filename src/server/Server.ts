import express from "express";
import { router } from "./routes";
import "dotenv/config";

const server = express();

interface Test {

}

server.use(express.json());

//Defining that the server should use the routes
server.use(router);

export { server };