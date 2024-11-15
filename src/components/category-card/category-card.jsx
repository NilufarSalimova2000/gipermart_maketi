import { Stack, Typography } from "@mui/material";
import React from "react";

export const CategoryCard = ({ img, text }) => {
    return (
        <Stack
            
            direction="row"
            gap={"16px"}
            alignItems="center"
            borderRadius={"2px"}
            bgcolor="#f6f6f6"
            py={"14px"} px={"16px"}
        >
            <img src={img} alt="category" style={{ width: "60%", marginBottom: "8px" }} />
            <Typography color="#333" fontWeight="500" variant="h4" align="center">
                {text}
            </Typography>
        </Stack>
    );
};
