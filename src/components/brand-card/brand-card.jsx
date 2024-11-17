import { Box, Stack } from "@mui/material";
import React from "react";

export const BrandCard = ({ img }) => {
    return (
        <Stack sx={{
            overflow: "hidden", 
            transition: "all 0.3s ease",
            "&:hover": {
                backgroundColor: "#eaeaea", 
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
            },
            "&:hover img": {
                transform: "scale(1.1)", 
            },
        }} alignItems={"center"} justifyContent={"center"} width={"185px"} bgcolor={"#f8f8f8"}>
            <img style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease", 
            }} src={img} alt="imag" />
        </Stack>
    )
}