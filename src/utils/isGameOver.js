import {swipeDown, swipeLeft, swipeRight, swipeUp} from "./movement";

export const checkGameOver = (board) => {
    if (JSON.stringify(board) !== JSON.stringify(swipeLeft(board, true))) return false

    if (JSON.stringify(board) !== JSON.stringify(swipeRight(board, true))) return false

    if (JSON.stringify(board) !== JSON.stringify(swipeDown(board, true))) return false

    if (JSON.stringify(board) !== JSON.stringify(swipeUp(board, true))) return false
    return true
}