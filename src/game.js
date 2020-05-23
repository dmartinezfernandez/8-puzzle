const target = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const state = [...target];

function initialize() {
    state.length = 0;
    state.push(...target);
}

const solvable = (arr) => {
    let inversions = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== 8) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== 8 && arr[i] > arr[j])
                    inversions++;
            }
        }
    }
    return inversions % 2 === 0;
};

function shuffle() {
    do {
        for (let i = 8; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state[i], state[j]] = [state[j], state[i]];
        }
    } while (!solvable(state));
};

function kidsShuffle() {
    initialize();
    const n = Math.floor(Math.random() * 5) + 2; // Random number of moves between 2 and 6.
    let k = -1, k0 = -1;
    for (let i = 0; i < n; i++) {
        // Find available moves.
        const moves = [];
        for (let j = 0; j < 9; j++) {
            // '&& j !== k0' avoids last move.
            if (canSlide(state[j]) && j !== k0) {
                moves.push(j);
            }
        }
        k0 = k;
        // Choose one randomly.
        const r = Math.floor(Math.random() * moves.length);
        k = moves[r];
        slide(k);
    };
}

function getValue(i) {
    return state[i];
}

function canSlide(value) {
    const
        i = state.indexOf(value),
        j = state.indexOf(8);
    return Math.abs(i - j) === 3 || (
        Math.abs(i % 3 - j % 3) === 1 &&
        Math.floor(i / 3) === Math.floor(j / 3)
    );
}

function slide(i) {
    const j = state.indexOf(8);
    [state[i], state[j]] = [state[j], state[i]];
}

export { canSlide, slide, getValue, initialize, shuffle, kidsShuffle };