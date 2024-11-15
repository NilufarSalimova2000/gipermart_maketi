import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import styled from "@emotion/styled";
import { colors } from "../../mui-config/colors";
import { all } from "axios";

const CartButton = styled(Button)`
    
    padding: 6px;
    
    transition: all 0.3s ease;
    background-color: ${colors.gipermart};
    &:hover {
        background-color: ${colors.korzinka};
    }
`

export const ProductCard = ({ img, brand, title, rame, color, price }) => {
    return (
        <Stack sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 15px -1px rgba(0,0,0,0.6)', 
            },
          }} width={"214px"} p={"15px"}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"} mb={"14px"}>
                <img width={"165px"} src={img} alt="imag" />
                <IconButton><LikeIcon /></IconButton>
            </Stack>
            <Typography variant="h4">Смартфон {brand}</Typography>
            <Typography mb={"27px"} variant="h4">{title}{rame}{color}</Typography>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography fontSize={"18px"} variant="h3">{price} Сум</Typography>
                <CartButton ><CartIcon /></CartButton>
            </Stack>
        </Stack>
    )
}