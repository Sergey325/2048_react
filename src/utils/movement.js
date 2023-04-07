import cloneDeep from "lodash.clonedeep";
import {addNumber} from "./addNumber";

export const swipeLeft = (board, check = false) => {
    let oldBoard = board
    let newBoard = cloneDeep(board);
    let points = 0

    for (let i = 0; i < 4; i++) {
        let b = newBoard[i];
        let slow = 0;
        let fast = 1;
        while (slow < 4) {
            if (fast === 4) {
                fast = slow + 1;
                slow++;
                continue;
            }
            if (b[slow] === 0 && b[fast] === 0) {
                fast++;
            } else if (b[slow] === 0 && b[fast] !== 0) {
                b[slow] = b[fast];
                b[fast] = 0;
                fast++;
            } else if (b[slow] !== 0 && b[fast] === 0) {
                fast++;
            } else if (b[slow] !== 0 && b[fast] !== 0) {
                if (b[slow] === b[fast]) {
                    b[slow] = b[slow] + b[fast];
                    if (!check){
                        mergeAnim(i, slow)
                    }
                    points += b[slow]
                    b[fast] = 0;
                    fast = slow + 1;
                    slow++;
                } else {
                    slow++;
                    fast = slow + 1;
                }
            }
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(newBoard) && !check) {
        addNumber(newBoard);
        return {newBoard, points}
    }
    if(check){
        return newBoard
    }
}

export const swipeRight = (board, check = false) => {
    let oldBoard = board;
    let newBoard = cloneDeep(board);
    let points = 0

    for (let i = 3; i >= 0; i--) {
        let b = newBoard[i];
        let slow = b.length - 1;
        let fast = slow - 1;
        while (slow > 0) {
            if (fast === -1) {
                fast = slow - 1;
                slow--;
                continue;
            }
            if (b[slow] === 0 && b[fast] === 0) {
                fast--;
            } else if (b[slow] === 0 && b[fast] !== 0) {
                b[slow] = b[fast];
                b[fast] = 0;
                fast--;
            } else if (b[slow] !== 0 && b[fast] === 0) {
                fast--;
            } else if (b[slow] !== 0 && b[fast] !== 0) {
                if (b[slow] === b[fast]) {
                    b[slow] = b[slow] + b[fast];
                    if (!check){
                        mergeAnim(i, slow)
                    }
                    points += b[slow]
                    b[fast] = 0;
                    fast = slow - 1;
                    slow--;
                } else {
                    slow--;
                    fast = slow - 1;
                }
            }
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(newBoard) && !check) {
        addNumber(newBoard);
        return {newBoard, points}
    }
    if(check){
        return newBoard
    }
};

export const swipeDown = (board, check = false) => {
    let newBoard = cloneDeep(board);
    let oldBoard = JSON.parse(JSON.stringify(board));
    let points = 0

    for (let i = 3; i >= 0; i--) {
        let slow = newBoard.length - 1;
        let fast = slow - 1;
        while (slow > 0) {
            if (fast === -1) {
                fast = slow - 1;
                slow--;
                continue;
            }
            if (newBoard[slow][i] === 0 && newBoard[fast][i] === 0) {
                fast--;
            } else if (newBoard[slow][i] === 0 && newBoard[fast][i] !== 0) {
                newBoard[slow][i] = newBoard[fast][i];
                newBoard[fast][i] = 0;
                fast--;
            } else if (newBoard[slow][i] !== 0 && newBoard[fast][i] === 0) {
                fast--;
            } else if (newBoard[slow][i] !== 0 && newBoard[fast][i] !== 0) {
                if (newBoard[slow][i] === newBoard[fast][i]) {
                    newBoard[slow][i] = newBoard[slow][i] + newBoard[fast][i];
                    if (!check){
                        mergeAnim(slow,i)
                    }
                    points += newBoard[slow][i]
                    newBoard[fast][i] = 0;
                    fast = slow - 1;
                    slow--;
                } else {
                    slow--;
                    fast = slow - 1;
                }
            }
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(newBoard) && !check) {
        addNumber(newBoard);
        return {newBoard, points}
    }
    if(check){
        return newBoard
    }
};

export const swipeUp = (board, check = false) => {
    let newBoard = cloneDeep(board);
    let oldBoard = JSON.parse(JSON.stringify(board));
    let points = 0

    for (let i = 0; i < 4; i++) {
        let slow = 0;
        let fast = 1;
        while (slow < 4) {
            if (fast === 4) {
                fast = slow + 1;
                slow++;
                continue;
            }
            if (newBoard[slow][i] === 0 && newBoard[fast][i] === 0) {
                fast++;
            } else if (newBoard[slow][i] === 0 && newBoard[fast][i] !== 0) {
                newBoard[slow][i] = newBoard[fast][i];
                newBoard[fast][i] = 0;
                fast++;
            } else if (newBoard[slow][i] !== 0 && newBoard[fast][i] === 0) {
                fast++;
            } else if (newBoard[slow][i] !== 0 && newBoard[fast][i] !== 0) {
                if (newBoard[slow][i] === newBoard[fast][i]) {
                    newBoard[slow][i] = newBoard[slow][i] + newBoard[fast][i];
                    if (!check){
                        mergeAnim(slow, i)
                    }
                    points += newBoard[slow][i]
                    newBoard[fast][i] = 0;
                    fast = slow + 1;
                    slow++;
                } else {
                    slow++;
                    fast = slow + 1;
                }
            }
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(newBoard) && !check) {
        addNumber(newBoard);
        return {newBoard, points}
    }
    if(check){
        return newBoard
    }
};

const mergeAnim = (row,col) => {
    document.querySelector(`.cell-${row}-${col}`)?.classList.add("merged");
    setTimeout(async () => {
        document.querySelector(`.cell-${row}-${col}`).classList.remove("merged");
    }, 200);
}