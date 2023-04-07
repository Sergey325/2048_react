import {deepPurple, lightBlue, orange, green} from '@mui/material/colors';

// mui theme settings
export const themeSettings = () => {
    return {
        palette: {
            purple: {
                1: deepPurple[50],
                2: deepPurple[100],
                3: deepPurple[200],
                4: deepPurple[300],
                5: deepPurple["A100"],
                6: deepPurple[400],
                7: deepPurple["A200"],
                8: deepPurple[500],
                9: deepPurple[600],
                10: deepPurple[700],
                11: deepPurple[800],
                12: deepPurple["A400"],
                13: deepPurple["A700"],
                14: deepPurple[900],
                15: "#271675",
                16: "#1f125e",
                17: "#190e4b",
                background: {
                    gradientStart: "#628FC8",
                    gradientEnd: "#7C1A89",
                },
            },
            blue: {
                1: lightBlue[50],
                2: lightBlue[100],
                3: lightBlue["A100"],
                4: lightBlue[200],
                5: lightBlue[300],
                6: lightBlue["A200"],
                7: lightBlue[400],
                8: lightBlue["A400"],
                9: lightBlue[500],
                10: lightBlue[600],
                11: lightBlue["A700"],
                12: lightBlue[700],
                13: lightBlue[800],
                14: lightBlue[900],
                15: "#01467c",
                16: "#013863",
                17: "#012d4f",
                background: {
                    gradientStart: "rgb(38, 179, 173)",
                    gradientEnd: "rgb(22, 36, 111)",
                }
            },
            orange: {
                1: orange[50],
                2: orange[100],
                3: orange["A100"],
                4: orange[200],
                5: orange[300],
                6: orange[400],
                7: orange["A200"],
                8: orange[500],
                9: orange["A400"],
                10: orange[600],
                11: orange[700],
                12: orange[800],
                13: orange["A700"],
                14: orange[900],
                15: "#b84100",
                16: "#933400",
                17: "#762a00",
                background: {
                    gradientStart: "rgb(227, 164, 49)",
                    gradientEnd: "rgb(83, 57, 144)",
                }
            },
            green: {
                1: green[50],
                2: green[100],
                3: green[200],
                4: green[300],
                5: green[400],
                6: "#58a64d",
                7: "#4a9452",
                8: "#438b54",
                9: "#3c8256",
                10: "#347858",
                11: "#2d6f5a",
                12: "#26665c",
                13: "#1f5d5e",
                14: "#185461",
                15: "#114b63",
                16: "#0a4265",
                17: "#033967",
                background: {
                    gradientStart: "rgb(109, 193, 71)",
                    gradientEnd: "rgb(3, 57, 103)",
                }
            },
            main: {
                gray100: "rgba(255,255,255,0.5)",
                gray200: "rgba(255,255,255,0.7)",
                gray400: "rgba(34,34,34,0.4)",
                gray600: "rgba(34,34,34,0.6)",
            },
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            // fontSize: 14,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "4.9rem",
                // fontSize: "4.6rem",
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "2.5rem",
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "1.9rem",
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "1.6rem",
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "1.3rem",
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: "1.15rem",
            },
        },
    }
};
