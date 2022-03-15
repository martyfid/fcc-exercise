import { Game } from "./game.js";
import { Statistic } from "./statistic.js";
export class Simulation {

    game = new Game();
    rounds = 1000;
    numDice = 5;
    statistics = [];


    constructor() {

        for (let i = 0; i < (numDice * 6) + 1; i++)
        {
            this.statistics.push(new Statistic(i));
        }

        for (let i = 0; i < this.rounds; i++) {
            let score = this.game.play();

            let index = this.statistics.findIndex(item => item.score === score);

            if (index) this.statistics[index].add();
        
        }

        this.statistics.forEach(stat=> stat.print());
        // console.table(this.statistics);

    }
}

let sim = new Simulation();