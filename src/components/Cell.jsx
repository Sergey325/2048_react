import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import {useSelector} from "react-redux";

const Cell = ({cell, row, col}) => {
    const mode = useSelector((state) => state.mode);
    const {palette} = useTheme();
    const degree = Math.log(cell) / Math.log(2);
    const isNonMobile = useMediaQuery("(min-width:768px)")

    return (
        <div style={{
            width: "7.15rem",
            height: "7.15rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (cell ? palette[mode][degree] : "rgba(255,255,255,0.06)"),
            fontSize: `${((isNonMobile ? 36 : 26) - Math.ceil(degree / 2)) / (isNonMobile ? 14 : 10)}rem`,
            color: (cell > 4 ? "white" : "black"),
            borderRadius: "0.7rem",
        }} className={`cell-${row}-${col}`}>
            {cell !== 0 && cell}
        </div>
    );
};

export default Cell;
