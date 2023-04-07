import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import FlexCenter from "./FlexCenter";
import Cell from "./Cell";
import cloneDeep from "lodash.clonedeep";
import {addNumber} from "../utils/addNumber";
import {swipeDown, swipeLeft, swipeRight, swipeUp} from "../utils/movement";
import {checkGameOver} from "../utils/isGameOver";
import {useEvent} from "../hooks/useEvent";
import {useDispatch, useSelector} from "react-redux";
import {setBoard, setIsGameOver, setScore} from "../state"
import {useTheme} from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import Swipe from "react-easy-swipe";


const Board = () => {
    const {board, score, prevScore, isGameOver} = useSelector((state) => state)
    const state = useSelector((state) => state)
    const {palette} = useTheme()
    const dispatch = useDispatch()

    useLocalStorage("gameSlice", state)

    const initialize = () => {
        if (score === 0 && prevScore === 0) {
            let newGrid = cloneDeep(board);
            addNumber(newGrid);
            addNumber(newGrid);
            dispatch(setBoard({board: newGrid}))
        }
    }

    useEffect(() => {
        initialize()
    }, [])


    const handleSwipe = (swipe) => {
        const returnedData = swipe(board)
        if (returnedData) {
            dispatch(setIsGameOver({isGameOver: checkGameOver(returnedData["newBoard"])}))
            dispatch(setBoard({board: returnedData["newBoard"]}));
            dispatch(setScore({score: score + returnedData["points"]}));
        } else {
            dispatch(setIsGameOver({isGameOver: checkGameOver(board)}))
        }
    }

    const handleKeyPress = (e) => {
        let returnedData;

        if (e.type === 'keyup' && !isGameOver) {
            switch (e.key) {
                case 'ArrowUp':
                    returnedData = swipeUp(board);
                    break
                case 'ArrowDown':
                    returnedData = swipeDown(board);
                    break
                case 'ArrowRight':
                    returnedData = swipeRight(board);
                    break;
                case 'ArrowLeft':
                    returnedData = swipeLeft(board);
                    break;
                default:
                    return;
            }
            if (returnedData) {
                dispatch(setIsGameOver({isGameOver: checkGameOver(returnedData["newBoard"])}))
                dispatch(setBoard({board: returnedData["newBoard"]}));
                dispatch(setScore({score: score + returnedData["points"]}));
            } else {
                dispatch(setIsGameOver({isGameOver: checkGameOver(board)}))
            }
        }
    }
    useEvent("keyup", handleKeyPress);

    return (
        <Swipe
            onSwipeDown={() => handleSwipe(swipeDown)}
            onSwipeLeft={() => handleSwipe(swipeLeft)}
            onSwipeRight={() => handleSwipe(swipeRight)}
            onSwipeUp={() => handleSwipe(swipeUp)}
            style={{overflowY: "hidden"}}
        >
            <FlexCenter
                flexDirection="column"
                gap="0.35rem"
                backgroundColor={palette.main["gray400"]}
                p="0.35rem"
            >
                {board.map((row, i) =>
                    <Box gap="0.35rem" display="flex" key={i}>
                        {row.map((cell, j) =>
                            <Cell cell={cell} row={i} col={j} key={j}/>
                        )}
                    </Box>
                )}
            </FlexCenter>
        </Swipe>
    );
};

export default Board;