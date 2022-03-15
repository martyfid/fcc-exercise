export class Dice {

    constructor() {}

    roll(){
        return Math.ceil(Math.random()*6);
    }
}


// //Code for testing
// let dice = new Dice();

// console.log(dice.roll());