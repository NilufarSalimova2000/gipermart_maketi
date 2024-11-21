import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../../utils/storage";
import { InfoIcon } from "../../assets/icons/info-icon";
import { OrderIcon } from "../../assets/icons/order-icon";
import { AddressIcon } from "../../assets/icons/address-icon";
import { LikeIcon } from "../../assets/icons/like-icon";
import { NotificationIcon } from "../../assets/icons/notification-icon";

export const ProfileLayout = () => {
    const accessToken = loadState("userData");
    if (!accessToken) {
        return <Navigate replace to="/" />;
    }
    return (
        <Box py={"30px"}>
            <Container maxWidth="xl">
                <Stack direction={"row"} gap={"50px"} alignItems={"start"}>
                    <Stack width={"330px"} gap={"24px"}>
                        <Stack direction={"row"} gap={"12px"} alignItems={"center"} p={"12px 24px"} border={"1.50px solid #808080"}>
                            <InfoIcon />
                            <Link style={{ textDecoration: "none" }} to={"/profile"}><Typography fontWeight={500} variant="h4">Персональные данные</Typography></Link>
                        </Stack>
                        <Stack direction={"row"} gap={"12px"} alignItems={"center"} p={"12px 24px"} border={"1.50px solid #808080"}>
                            <OrderIcon />
                            <Link style={{ textDecoration: "none" }} to={"/profile/orders"}><Typography fontWeight={500} variant="h4">Мои заказы</Typography></Link>
                        </Stack>
                        <Stack direction={"row"} gap={"12px"} alignItems={"center"} p={"12px 24px"} border={"1.50px solid #808080"}>
                            <AddressIcon />
                            <Link style={{ textDecoration: "none" }} to={"/profile/address"}><Typography fontWeight={500} variant="h4">Адреса</Typography></Link>
                        </Stack>
                        <Stack direction={"row"} gap={"12px"} alignItems={"center"} p={"12px 24px"} border={"1.50px solid #808080"}>
                            <LikeIcon />
                            <Link style={{ textDecoration: "none" }} to={"/profile/saved"}><Typography fontWeight={500} variant="h4">Избранные товары</Typography></Link>
                        </Stack>
                        <Stack direction={"row"} gap={"12px"} alignItems={"center"} p={"12px 24px"} border={"1.50px solid #808080"}>
                            <NotificationIcon />
                            <Link style={{ textDecoration: "none" }} to={"/profile/notifications"}><Typography fontWeight={500} variant="h4">Уведомления</Typography></Link>
                        </Stack>
                    </Stack>
                    <Box><Outlet /></Box>
                </Stack>
            </Container>
        </Box>
    )
}