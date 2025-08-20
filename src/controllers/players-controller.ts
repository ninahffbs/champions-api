import { Request, Response } from "express";
import { getPlayerByIdService, getPlayerService } from "../services/players-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async(req:Request, res:Response) => {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id) //pega o id colocada na url e salva na variavel
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}