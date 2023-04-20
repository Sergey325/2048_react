import {swipeDown, swipeLeft, swipeRight, swipeUp} from "./movement";

export const handleKeyPress = (e, isGameOver, board, handleGameAction) => {
    if (e.type === 'keyup' && !isGameOver) {
        let returnedData;
        switch (e.key) {
            case 'ArrowUp':
                returnedData = swipeUp(board);
                break;
            case 'ArrowDown':
                returnedData = swipeDown(board);
                break;
            case 'ArrowRight':
                returnedData = swipeRight(board);
                break;
            case 'ArrowLeft':
                returnedData = swipeLeft(board);
                break;
            default:
                return;
        }
        handleGameAction(returnedData);
    }
};

export const onSwipedHandler = (SwipeEventData, board, handleGameAction) => {
    console.log("User Swiped!", SwipeEventData);
    let returnedData;
    switch (SwipeEventData.dir) {
        case 'Up':
            returnedData = swipeUp(board);
            break;
        case 'Down':
            returnedData = swipeDown(board);
            break;
        case 'Right':
            returnedData = swipeRight(board);
            break;
        case 'Left':
            returnedData = swipeLeft(board);
            break;
        default:
            return;
    }
    handleGameAction(returnedData);
};