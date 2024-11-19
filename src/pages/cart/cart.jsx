import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { CartProduct } from "../../components/cart-product/cart-product";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import formatter from "../../utils/currency-format";
import styled from "@emotion/styled";
import { colors } from "../../mui-config/colors";

const CustomButton = styled(Button)`
    padding: 15px;
    background-color: ${colors.gipermart};
    text-align: center;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;

`

export const Cart = () => {
    const { product_list } = useSelector((state) => state.product);
    const totalPrice = useSelector((state) => state.product.totalPrice);
    return (
        <Box pt={"25px"} pb={"100px"}>
            <Container maxWidth="xl">
                <Typography>Корзина</Typography>
                <Stack direction={"row"} justifyContent={"space-between"} gap={"28px"}>
                    <Box>
                        {product_list.map((item) => {
                            return <CartProduct key={nanoid()} {...item} />
                        })}
                    </Box>
                    <Box width={"330px"}>
                        <Box bgcolor={"#f7f7f7"} p={"24px"} >
                            <Typography mb={"16px"} variant="h3">В корзине</Typography>
                            <Typography mb={"16px"} variant="h4">Товаров: </Typography>
                            <Typography variant="h3">{formatter(totalPrice)} Сум</Typography>
                        </Box>
                        <Button>Оформить заказ</Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};