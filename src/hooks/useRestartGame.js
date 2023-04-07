import {useDispatch, useSelector} from "react-redux";
import {setBoard, setHighScore, setIsGameOver, setScore} from "../state";
import {addNumber} from "../utils/addNumber";

export default function useRestartGame() {
    const newMatrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    const {score, highScore} = useSelector((state) => state);

    const dispatch = useDispatch();

    return () => {
        if (score > highScore) dispatch(setHighScore({highScore: score}));
        dispatch(setScore({score: 0}));

        addNumber(newMatrix);
        addNumber(newMatrix);
        dispatch(setIsGameOver({IsGameOver: false}));

        dispatch(setBoard({board: newMatrix}));
    }
};

