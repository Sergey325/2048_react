import React from "react";
import {CssBaseline} from "@mui/material";
import FlexCenter from "./components/FlexCenter";
import {useSelector} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {themeSettings} from "./theme";
import Board from "./components/Board";
import Header from "./components/header";
import BasicModal from "./components/modal";


function App() {
    const mode = useSelector((state) => state.mode)
    const theme = createTheme(themeSettings())
    const isGameOver = useSelector((state) => state.isGameOver)

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <FlexCenter
                    height="100vh"
                    sx={{
                        backgroundImage: `linear-gradient(to right bottom, 
                                ${theme.palette[mode].background["gradientStart"]},
                                ${theme.palette[mode].background["gradientEnd"]})`,
                        borderRadius: "0px"
                    }}
                >
                    {isGameOver &&
                        <BasicModal>GAME OVER!</BasicModal>
                    }
                    <FlexCenter flexDirection="column">
                        <Header/>
                        <Board/>
                    </FlexCenter>
                </FlexCenter>
            </ThemeProvider>
        </div>
    );
}

export default App;
