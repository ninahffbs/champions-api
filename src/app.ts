import express, { json, Request, Response } from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes";
import cors from "cors";

function createApp(){
    const app = express();
    app.use(json());
    app.use(cors());

    app.use("/api", router);
    return app;
}

export default createApp