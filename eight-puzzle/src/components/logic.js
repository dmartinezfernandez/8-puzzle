import { reactive } from 'vue'

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
    for(let i = 0; i < arr.length; i++)
        arr[i] = arr2[i];
};

class Game {
    constructor() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.shuffle = () => shuffle(this.board);
    };
}

export default reactive({
    clicks: [],
    game: new Game()
});
