import { Game } from "./game.js";

export class Simulation {

    game = new Game();
    rounds = 1000;
    statistics = [];

    constructor() {

        for(let i = 0; i < this.rounds; i++)
        {
            
            let score = this.game.play();

            

        }

    }
}