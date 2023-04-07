import React, {useEffect} from 'react';
import FlexCenter from "./FlexCenter";
import {IconButton, Typography, useTheme} from "@mui/material";
import {PaletteOutlined, RestartAltOutlined, UndoOutlined} from "@mui/icons-material";
import {setBoard, setIsGameOver, setMode, setScore} from "../state";
import {useDispatch, useSelector} from "react-redux";
import useRestartGame from "../hooks/useRestartGame";

const Header = () => {
    const mode = useSelector((state) => state.mode)
    const {prevBoard, score, highScore, prevScore} = useSelector((state) => state)
    const dispatch = useDispatch()
    const {palette} = useTheme()
    const mainColor = palette.main
    const restartGame = useRestartGame();


    useEffect(() => {

    }, []);

    const themes = [
        "purple",
        "blue",
        "orange",
        "green"
    ]

    const changeTheme = () => {
        let newMode = themes[mode === "green" ? 0 : themes.indexOf(mode) + 1]
        dispatch(setMode({mode: newMode}))
    }

    const goPrevious = () => {
        dispatch(setScore({score: prevScore}))
        dispatch(setBoard({board: prevBoard}))
        dispatch(setIsGameOver({isGameOver: false}))
    }


    return (
        <FlexCenter flexDirection="column" px="5px" width="100%">
            <FlexCenter width="100%" sx={{justifyContent: "space-between", alignItems: "stretch"}}>
                <Typography variant="h1">2048</Typography>
                <FlexCenter gap="0.8rem" pt="0.7rem">
                    <FlexCenter backgroundColor={mainColor["gray600"]}
                                sx={{flexDirection: "column", alignItems: "center"}} p="0.57rem">
                        <Typography variant="h6" color={mainColor["gray100"]}>SCORE</Typography>
                        <Typography variant="h4">{score}</Typography>
                    </FlexCenter>
                    <FlexCenter backgroundColor={mainColor["gray600"]} sx={{flexDirection: "column"}}
                                p="0.57rem">
                        <Typography variant="h6" color={mainColor["gray100"]}>HIGH SCORE</Typography>
                        <Typography variant="h4">{highScore}</Typography>
                    </FlexCenter>
                </FlexCenter>
            </FlexCenter>
            <FlexCenter width="100%" py="0.8rem"
                        sx={{justifyContent: "space-between", alignItems: "flex-start"}}>
                <Typography variant="h3" gutterBottom>Endless mode</Typography>
                <FlexCenter gap="1.6rem" zIndex={20}>
                    <IconButton
                        sx={{
                            borderRadius: "0.57rem",
                            p: "0.35rem",
                            backgroundColor: mainColor["gray600"],
                            "&:hover": {
                                backgroundColor: mainColor["gray400"],
                            },
                        }}
                        onClick={() => changeTheme()}
                    >
                        <PaletteOutlined sx={{
                            color: mainColor["gray200"],
                            fontSize: "2.3rem"
                        }}/>
                    </IconButton>
                    <IconButton
                        sx={{
                            borderRadius: "0.57rem",
                            p: "0.35rem",
                            backgroundColor: mainColor["gray600"],
                            "&:hover": {
                                backgroundColor: mainColor["gray400"],
                            },
                        }}
                        onClick={() => goPrevious()}
                    >
                        <UndoOutlined sx={{
                            color: mainColor["gray200"],
                            fontSize: "2.3rem"
                        }}/>
                    </IconButton>
                    <IconButton
                        sx={{
                            borderRadius: "0.57rem",
                            p: "0.35rem",
                            backgroundColor: mainColor["gray600"],
                            "&:hover": {
                                backgroundColor: mainColor["gray400"],
                            },
                        }}
                        onClick={restartGame}
                    >
                        <RestartAltOutlined sx={{
                            color: mainColor["gray200"],
                            fontSize: "2.3rem"
                        }}/>
                    </IconButton>
                </FlexCenter>
            </FlexCenter>
        </FlexCenter>
    );
};

export default Header;