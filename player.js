import { Dice } from "./dice.js";

export class Player {

    arrayDice = [];

    constructor() {
        for (let i = 0; i < 5; i++) this.arrayDice.push(new Dice());
    }

    rollHand() {
        let score = null;
        this.arrayDice.forEach(die => {
            let result = die.roll();
            if(result == 3) score = 0;
            else if(score > result) score = result;
            else score = result;
        }
        );

        return score;
    }

}


/* Code for testing */
let p1 = new Player();

console.log(p1.rollHand());