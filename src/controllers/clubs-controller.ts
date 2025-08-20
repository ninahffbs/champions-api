import { Request, Response } from "express";
import { getClubService } from "../services/clubs-service";

export const getClubs = async (req: Request, resp: Response) => {
    const response = await getClubService()
    resp.status(response.statusCode).json(response.body);
}