import {createSlice} from "@reduxjs/toolkit";

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("gameSlice");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const initialState = {
    mode: "purple",
    score: 0,
    prevScore: 0,
    highScore: 0,
    isGameOver: false,
    board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    prevBoard: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
};

export const gameSlice = createSlice({
    name: "game",
    initialState: loadFromLocalStorage() || initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload.mode;
        },
        setScore: (state, action) => {
            state.prevScore = state.score
            state.score = action.payload.score;
            if (state.score > state.highScore) state.highScore = state.score
        },
        setHighScore: (state, action) => {
            state.highScore = action.payload.highScore;
        },
        setIsGameOver: (state, action) => {
            state.isGameOver = action.payload.isGameOver;
        },
        setBoard: (state, action) => {
            state.prevBoard = state.board;
            state.board = action.payload.board
        },
        setPrevBoard: (state, action) => {
            state.prevBoard = action.payload.prevBoard;
        },
    },
});

export const {setMode, setScore, setHighScore, setBoard, setPrevBoard, setIsGameOver} =
    gameSlice.actions;
export default gameSlice.reducer;