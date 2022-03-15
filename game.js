import { Player } from "./player.js";
import { Dice } from "./dice.js";

export class Game{

    player1 = new Player();


    constructor() {}

    play() {
        
        let total = 0;

        while(this.player1.handSize) total += this.player1.rollHand();

        this.player1.reset();

        console.log(total);

        return total;
    }


}

let blah = new Game();

blah.play();