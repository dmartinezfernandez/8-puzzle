// @ts-check
import { reactive } from 'vue'

// https://www.cs.princeton.edu/courses/archive/spr10/cos226/assignments/8puzzle.html

/**
 * @param {Number[]} arr
 */
let parity = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                count++;
        }
    }
    return count % 2;
};

/**
 * @param {Number[]} arr
 */
let shuffle = (arr) => {
    let arr1 = [], arr2 = [], par = parity(arr);
    do {
        arr1 = [...arr];
        arr2 = [];
        while (arr1.length > 0) {
            let i = Math.floor(Math.random() * arr1.length);
            arr2.push(arr1.splice(i, 1)[0]);
        }
    } while (parity(arr2) != par); // Solvable condition.
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr2[i];
};

class Game {
    constructor() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.count = 0;
        this.shuffle = () => {
            shuffle(this.board);
            this.count = 0;
        };
        /**
         * @param {number} i
         */
        this.isBlank = (i) => {
            return this.board[i] == 9;
        };
        this.getBlankIndex = () => {
            return this.board.indexOf(9);
        };
        /**
         * @param {number} i
         */
        this.getRow = (i) => {
            return Math.trunc(i / 3);
        };
        /**
         * @param {number} i
         */
        this.getColumn = (i) => {
            return i % 3;
        };
        /**
         * @param {number} i
         */
        this.canSlide = (i) => {
            let j = this.getBlankIndex();
            let rowI = this.getRow(i), columnI = this.getColumn(i), rowJ = this.getRow(j), columnJ = this.getColumn(j);
            return (rowI == rowJ && Math.abs(columnI - columnJ) == 1)
                || (columnI == columnJ && Math.abs(rowI - rowJ) == 1);
        }
        /**
         * @param {number} i
         */
        this.slide = (i) => {
            let canSlide = this.canSlide(i);
            if (canSlide) {
                console.log(true);
                let j = this.getBlankIndex();
                let k = this.board[j];
                this.board[j] = this.board[i];
                this.board[i] = k;
                this.count++;
            }
            return canSlide;
        };
    };
}

export default reactive({
    clicks: [],
    game: new Game()
});
