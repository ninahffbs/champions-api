import { PlayerModel } from "../models/player-models";
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { httpResponse } from "../models/http-response-models"

export const getPlayerService = async()=>{
    const data = await findAllPlayers();
    let response = null;

    if(data){
        response = await ok(data);
    }
    else{
        response = await noContent();
    }
    return response;
}

export const getPlayerByIdService = async(id: number) => {
    //pedir o dado pra o repositorio
    const data = await findPlayerById(id);
    console.log(id);
    let response = null;
    if(data){
        response = ok(data);
    }
    else{
        response = noContent();
    }
    return response;
}

export const createPlayerService = async(player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0){
        await insertPlayer(player);
        response = created();
        console.log(player);
    }
    else{
        response = badRequest();
    }
    return response;
}