import React, { Component } from 'react'

let budget = 0.5;
let stake = 0.5;

export default class Dices extends Component {

    //A function that simulates the randomness of two 6-sided dices
    throwDices = () => {
        let dice1, dice2;
        dice1 = Math.floor(Math.random() * (+7 - +1)) + +1;
        dice2 = Math.floor(Math.random() * (+7 - +1)) + +1;
        return (dice1 + dice2);
    }

    //A function that will loop through as many dice throws as we want 
    itterateGame = (itterations, stake) => {
        for (let i = 0; i < itterations; i++) {
            budget = budget - stake;
            switch (this.throwDices()) {
                case 12: budget = budget + (4 * stake);
                break;
                case 11: budget = budget + (3 * stake);
                break;
                case 10: budget = budget + (2 * stake);
                break;
                case 9: budget = budget + stake;
                break;
                case 8: budget = budget + stake;
                break;
                case 7: budget = budget + stake;
                break;
                case 6: break;
                case 5: break;
                case 4: break;
                case 3: break;
                case 2: break;
                default: console.log('Someone stole the dices!');
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    //Reseting the budget at the beginning
                    budget = 0.5;
                    let startingBudget = budget;

                    //Playing the game for some number of itterations
                    this.itterateGame(1000, stake);

                    //Checking the budget after a long day of throwing dices
                    console.log('Your current budget is: ' + budget + '€');

                    //Determining if playing the game for the whole day actually made profit or lost money
                    console.log('You started the game with: ' + startingBudget +'€ and now you have: ' + budget + '€.');
                    if(budget >= startingBudget)
                        console.log('You WON: ' + (budget-startingBudget) + '€! Congratulations!');
                    else
                        console.log('You LOST: ' + (Math.abs(budget) + startingBudget) + '€! Please do not play this game anymore.');
                }}>
                    Start Dice Game
            </button>
            </div>
        )
    }
}