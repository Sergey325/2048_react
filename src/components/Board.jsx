import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import FlexCenter from "./FlexCenter";
import Cell from "./Cell";
import cloneDeep from "lodash.clonedeep";
import {addNumber} from "../utils/addNumber";
import {checkGameOver} from "../utils/isGameOver";
import {useEvent} from "../hooks/useEvent";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {setBoard, setIsGameOver, updateGameContext} from "../state"
import {useTheme} from "@mui/material";
import {useSwipeable} from "react-swipeable";
import {handleKeyPress, onSwipedHandler} from "../utils/helpers";


const Board = () => {
    const {board, score, prevScore, isGameOver} = useSelector((state) => state, shallowEqual);
    const {palette} = useTheme()
    const dispatch = useDispatch()

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

    const handleGameUpdate = (returnedData) => {
        if (returnedData) {
            dispatch(updateGameContext({
                score: score + returnedData["points"],
                board: returnedData["newBoard"],
                isGameOver: checkGameOver(returnedData["newBoard"])
            }))
        } else {
            dispatch(setIsGameOver({isGameOver: checkGameOver(board)}))
        }
    }

    const handlerSwipe = useSwipeable({
        preventScrollOnSwipe: false,
        onSwiped: (SwipeEventData) => onSwipedHandler(SwipeEventData, board, handleGameUpdate),
    });

    useEvent("keyup", (e) => handleKeyPress(e, isGameOver, board, handleGameUpdate));

    return (
        <FlexCenter
            flexDirection="column"
            gap="0.35rem"
            backgroundColor={palette.main["gray400"]}
            p="0.35rem"
            {...handlerSwipe}
        >
            {board.map((row, i) =>
                <Box gap="0.35rem" display="flex" key={i}>
                    {row.map((cell, j) =>
                        <Cell cell={cell} row={i} col={j} key={j}/>
                    )}
                </Box>
            )}
        </FlexCenter>
    );
};

export default Board;