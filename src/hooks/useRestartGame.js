import {useDispatch} from "react-redux";
import {updateGameContext} from "../state";
import {addNumber} from "../utils/addNumber";

export default function useRestartGame() {
    const newMatrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];


    const dispatch = useDispatch();

    return () => {
        addNumber(newMatrix);
        addNumber(newMatrix);

        dispatch(updateGameContext({
            score: 0,
            board: newMatrix,
            isGameOver: false
        }))
    }
};

