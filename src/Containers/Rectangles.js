import React, { Component } from 'react'

/*
Empty global array for holding the coordinates of each rectangle
example: R1 = [X1, Y1, X2, Y2]

A rectangle is defined by two diagonally opposing points.
By having these two points, it is possible to determine the
lenght of each side, and therefore construct the remaining
two points.
*/
let R1 = [];
let R2 = [];

export default class Rectangles extends Component {

    //A function that will loop the askForCoordinate function until it has the correct coordinates for each point of both rectangles
    //Also acts as validation
    itterateAsk = (rectangle) => {
        let r;
        if (rectangle === 'R1')
            r = R1;
        else if (rectangle === 'R2')
            r = R2;
        else return console.log('An error occured');
        while (r.length < 4) {
            switch (r.length) {
                case 0: {
                    let input;
                    let counter = 0;
                    while (!input && input !== 0) {
                        if (counter > 0)
                            input = parseInt(this.askForCoordinate('X', 'A', rectangle, 'Error: Input incorrect. Please enter a number.'));
                        else
                            input = parseInt(this.askForCoordinate('X', 'A', rectangle));
                        counter++;
                    }
                    r.push(input);
                }
                    break;
                case 1: {
                    let input;
                    let counter = 0;
                    while (!input && input !== 0) {
                        if (counter > 0)
                            input = parseInt(this.askForCoordinate('Y', 'A', rectangle, 'Error: Input incorrect. Please enter a number.'));
                        else
                            input = parseInt(this.askForCoordinate('Y', 'A', rectangle));
                        counter++;
                    }
                    r.push(input);
                }
                    break;
                case 2: {
                    let input;
                    let counter = 0;
                    while (!input && input !== 0) {
                        if (counter > 0)
                            input = parseInt(this.askForCoordinate('X', 'C', rectangle, 'Error: Input incorrect. Please enter a number.'));
                        else
                            input = parseInt(this.askForCoordinate('X', 'C', rectangle));
                        counter++;
                    }
                    r.push(input);
                }
                    break;
                case 3: {
                    let input;
                    let counter = 0;
                    while (!input && input !== 0) {
                        if (counter > 0)
                            input = parseInt(this.askForCoordinate('Y', 'C', rectangle, 'Error: Input incorrect. Please enter a number.'));
                        else
                            input = parseInt(this.askForCoordinate('Y', 'C', rectangle));
                        counter++;
                    }
                    r.push(input);
                    if (!this.checkRectangle(r)) {
                        console.log('[' + r + '] is NOT a rectangle! Try again.');
                        r = [];
                    }
                    else console.log('[' + r + '] IS a legitimate rectangle.');
                }
                    break;
                default: {
                    console.log('An error occured');
                }
            }
        }
        console.log(rectangle + ': ' + r);
    }

    //A function that will ask the user to enter one specific coordinate and return it
    askForCoordinate = (axis, point, rectangle, error) => {
        return prompt((error || '') + ' \nPlease enter the ' + axis + ' axis coordinate of point ' + point + ' for rectangle ' + rectangle + '.');
    }

    //A function that will check if the entered points indeed construct a rectangle
    checkRectangle = (r) => {
        console.log('Checking if [' + r + '] is indeed a rectangle...');
        if (r[0] === r[2] || r[1] === r[3])
            return false;
        else return true;
    }

    //A function that will check if the rectangles have intersections
    checkIntersection = (r1, r2) => {
        console.log('Checking if the rectangles have intersections...');

        //If the lowest edge of R2 is higher than the highest edge od R1, then they can't intersect,
        //If the highest edge of R2 is lower than the lowest edge of R1, then they can't intersect,
        //If the left-most edge od R2 is more right than the right-most edge of R1, then they can't intersect,
        //If the right-most edge of R2 is more left than the left-most edge of R1, then they can't intersect,
        //In every other case they will have an intersection,
        //Of course, this solution requires the rectangles to not be angles, but instead aligned with the x and y axis
        if (Math.min(r2[0], r2[2]) > Math.max(r1[0], r1[2]))
            return false;
        else if (Math.max(r2[0], r2[2]) < Math.min(r1[0], r1[2]))
            return false;
        else if (Math.min(r2[1], r2[3]) > Math.max(r1[1], r1[3]))
            return false;
        else if (Math.max(r2[1], r2[3]) < Math.min(r1[1], r1[3]))
            return false;
        else
            return true;
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    //reseting the rectangle array on every click
                    R1 = [];
                    R2 = [];
                    //asking for user input
                    this.itterateAsk('R1');
                    this.itterateAsk('R2');
                    //checking for intersections
                    if (this.checkIntersection(R1, R2))
                        console.log('Yes, the two rectangles DO intersect each other!')
                    else
                        console.log('No, the rectangles DO NOT have an intersection');
                }}>
                    Start Rectangles
            </button>
            </div>
        )
    }
}