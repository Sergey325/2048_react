import {createSlice} from "@reduxjs/toolkit";


const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const loadFromLocalStorage = () => {
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
            saveToLocalStorage("gameSlice", state)
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
        updateGameContext: (state, action) => {
            state.prevBoard = state.board;
            state.board = action.payload.board

            state.prevScore = state.score
            state.score = action.payload.score;
            if (state.score > state.highScore) state.highScore = state.score

            state.isGameOver = action.payload.isGameOver;

            saveToLocalStorage("gameSlice", state)
        },
    },
});

export const {setMode, setScore, setHighScore, setBoard, setPrevBoard, setIsGameOver, updateGameContext} =
    gameSlice.actions;
export default gameSlice.reducer;