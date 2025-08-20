import { PlayerModel } from "../models/player-model";
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { httpResponse } from "../models/http-response-models"
import { StatisticsModel } from "../models/statistics-model";
import { response } from "express";

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
        response = await ok(data);
    }
    else{
        response = await noContent();
    }
    return response;
}

export const createPlayerService = async(player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0){
        await insertPlayer(player);
        response = await created();
        console.log(player);
    }
    else{
        response = await badRequest();
    }
    return response;
}

export const deletePlayerService = async(id: number) => {
    let response = null;
    const isDeleted = await deleteOnePlayer(id);
    await deleteOnePlayer(id);
    if(isDeleted){
        response = await ok({message: "deleted"});
    }
    else{
        response = await badRequest();
    }
    return response;
}

export const updatePlayerService = async(id: number, statistics: StatisticsModel) => {
    const data = await findAndModifyPlayer(id, statistics);
    let response = null;
    if(Object.keys(data).length === 0){
        response = await badRequest();
    }
    else{
        response = await ok(data);
    }
    return response;
}