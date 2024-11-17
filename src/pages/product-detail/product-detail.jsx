import { Box, Button, Container, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useSingleProduct } from "../../service/query/useSingleProduct";
import { useParams } from "react-router-dom";
import { LikeIcon } from "../../assets/icons/like-icon";
import styled from "@emotion/styled";

export const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useSingleProduct(id);

    const CustomButton = styled(Button)`
        background-color: #FEEE00;
        text-align: center;
        padding: 12px 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #281800;
        width: 100%;
    `

    return (
        <Box>
            <Container maxWidth="xl">
                <Box>
                    {isLoading ? (
                        <Typography>Loading</Typography>
                    ) : (
                        <Box>
                            <Stack pt={"24px"} pb={"19px"} borderBottom={"1px solid #ededed"}>
                                <Typography mb={"18px"} variant="h3">{data?.title} {data?.rame}</Typography>
                                <Stack alignItems={"center"} gap={"36px"} direction={"row"}>
                                    <Rating />
                                    <Stack direction={"row"} gap={"12px"} alignItems={"center"}><LikeIcon />
                                        <Typography variant="h4">В избранное</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack alignItems={"start"} direction={"row"} justifyContent={"space-between"} py={"24px"}>
                                <Box>
                                    <img width={"435px"} src={data?.img} alt="imag" />
                                </Box>
                                <Stack gap={"15px"}>
                                    <Typography fontWeight={500} fontSize={"16px"} lineHeight={"125%"} color="#333">Объем памяти</Typography>
                                    <Typography>{data?.rame}</Typography>
                                    <Typography fontWeight={500} fontSize={"18px"} lineHeight={"111%"} color="#333">Характеристики</Typography>
                                    <Typography fontSize={"16px"} variant="h5">Цвет: {data?.color}</Typography>
                                    <Typography fontSize={"16px"} variant="h5">память: {data?.rame}</Typography>
                                </Stack>
                                <Box padding={"16px"} border={"1px solid #ededed"}>
                                    <Typography mb={"21px"} variant="h2">{data?.price} Сум</Typography>
                                    <CustomButton>В корзину</CustomButton>
                                </Box>
                            </Stack>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}