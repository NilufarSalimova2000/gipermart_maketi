import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { LikeIcon2 } from "../../assets/icons/like-icon2";
import { DeleteIcon } from "../../assets/icons/delete-icon";
import { useDispatch } from "react-redux";
import { deleteProduct, toggleAmount } from "../../redux/reducers/product-reducer";
import formatter from "../../utils/currency-format";

export const CartProduct = (props) => {
    const dispatch = useDispatch();
    const totalProductPrice = props.price * props.user_count;

    return (
        <Stack direction={"row"} py={"25px"} borderBottom={"1px solid #ededed"} gap={"30px"}>
            <img src={props.img} alt="imag" />
            <Box>
                <Typography width={"550px"} mb={"50px"} fontWeight={500} variant="h3">{props.title}{props.rame}</Typography>
                <Stack direction={"row"} gap={"36px"}>
                    <Button style={{display: "flex", alignItems: "center", gap: "8px"}}>
                        <LikeIcon2 />
                        <Typography variant="h6">В избранное</Typography>
                    </Button>
                    <Button style={{display: "flex", alignItems: "center", gap: "8px"}} onClick={() => dispatch(deleteProduct({ id: props.id }))}>
                        <DeleteIcon />
                        <Typography variant="h6">Удалить</Typography>
                    </Button>
                </Stack>
            </Box>
            <Box>
                <Typography mb={"40px"} variant="h3">{formatter(totalProductPrice)} Сум</Typography>
                <Stack direction={"row"} gap={"30px"}>
                    <IconButton onClick={() => dispatch(toggleAmount({ id: props.id, type: "decrement" }))}>-</IconButton>
                    <Typography fontWeight={400} variant="h3">{props.user_count}</Typography>
                    <IconButton onClick={() => dispatch(toggleAmount({ id: props.id, type: "increment" }))}>+</IconButton>
                </Stack>
            </Box>
        </Stack>
    )
}