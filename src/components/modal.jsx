import React from 'react';
import {Typography, useTheme} from "@mui/material";
import FlexCenter from "./FlexCenter";

const Modal = ({children, ...props}) => {
    const {palette} = useTheme()
    return (
        <FlexCenter
            height="100vh"
            width="100%"
            backgroundColor={palette.main["gray400"]}
            position="fixed"
            zIndex="10"
            {...props}
        >
            <Typography variant="h1" sx={{"&:hover": {cursor: "default"}}}>
                {children}
            </Typography>
        </FlexCenter>
    );
};

export default Modal;