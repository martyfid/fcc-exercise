export class Statistic {

    count = 0;
    score;
    constructor(input){
        this.score = input;
    }

    add()
    {
        this.count++;
    }

    print()
    {
        console.log(`The score of ${this.score} happened a total of ${this.count} times`);
    }

}