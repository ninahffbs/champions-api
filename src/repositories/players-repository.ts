import { PlayerModel } from "../models/player-models";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germanin",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },

];

export const findAllPlayers = async():Promise<PlayerModel[]> =>{
    return database;
};

export const findPlayerById = async(id: number):Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const insertPlayer = async(player: PlayerModel) => {
    database.push(player);
}