import { Dice } from "./dice.js";

export class Player {

    #arrayDice = [];

    constructor() {
        for (let i = 0; i < 5; i++) this.#arrayDice.push(new Dice());
    }

    rollHand() {
        let score = null;
        this.#arrayDice.forEach(die => {
            let result = die.roll();
            if (result == 3) { 
                score = 0;
                this.#arrayDice.pop(); //Remove any dice from array that rolled a 3. Should remember to delete this Dice to avoid memory leaks
            }
            else if (score > result) score = result;
            else score = result;
        }
        );

        if (score > 0) this.#arrayDice.pop(); //Pop lowest die. Should remember to delete this Dice to avoid memory leaks
        console.log(`- dice roll ${score}`);

        return score;
    }

    reset() {
        this.#arrayDice = [];
        for (let i = 0; i < 5; i++) this.#arrayDice.push(new Dice());
    }

    get handSize() {
        return this.#arrayDice.length;
    }
}


// /* Code for testing */
// let p1 = new Player();

// console.log('handsize', p1.handSize);
// console.log(p1.rollHand());
// console.log('handsize', p1.handSize);