import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService } from "../services/players-service";
import { noContent, ok } from "../utils/http-helper";

export const getPlayer = async(req:Request, res:Response) => {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id) //pega o id colocada na url e salva na variavel
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(req: Request, resp: Response) => {
    const bodyValue = req.body;
    console.log(bodyValue);
    const httpResponse = await createPlayerService(bodyValue);
    if(httpResponse){
        resp.status(httpResponse.statusCode).json(httpResponse?.body)
    }
    // else{
    //     const response = await noContent();
    //     resp.status(response.statusCode).json(response.body);
    // }
}

export const deletePlayer = async(req: Request, resp: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);
    resp.status(httpResponse.statusCode).json(httpResponse.body);
}