import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { OKIcon } from "../../assets/icons/ok-icon";
import { VKIcon } from "../../assets/icons/vk-icon";
import { YoutubeIcon } from "../../assets/icons/youtube-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import payme from "../../assets/payme_icon.svg";
import uzcard from "../../assets/uzcard_icon.svg";
import humo from "../../assets/humo_icon.svg";

export const Footer = () => {
    return (
        <footer>
            <Box bgcolor={"#f5f5f6"} py={"40px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} gap={"130px"}>
                        <Box>
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                            <a style={{ textDecoration: "none" }} href="tel:+998933746644">
                                <Typography mb={"2px"} fontWeight={500} fontSize={"21px"} color="#333">+99 893 374-66-44</Typography>
                            </a>
                            <Typography mb={"12px"} variant="h5">справочная служба</Typography>
                            <a style={{ textDecoration: "none" }} href="tel:+998902537753">
                                <Typography mb={"2px"} fontWeight={500} fontSize={"21px"} color="#333">+99 890 253-77-53</Typography>
                            </a>
                            <Typography mb={"16px"} variant="h5">интернет-магазин</Typography>
                            <Typography mb={"8px"} fontWeight={600} variant="h5">Оставайтесь на связи</Typography>
                            <Stack direction={"row"} >
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <OKIcon />
                                </IconButton>
                                <IconButton>
                                    <VKIcon />
                                </IconButton>
                                <IconButton>
                                    <YoutubeIcon />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                        <Stack gap={"16px"}>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Условия обмена и возврата</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Каталог</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">О компании</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Контакты</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Доставка</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Оплата</Typography>
                            </a>
                        </Stack>
                        <Stack gap={"16px"}>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Клиентам</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Личный кабинет</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Блог</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Обратная связь</Typography>
                            </a>
                        </Stack>
                        <Stack gap={"16px"}>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Информация</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Пользовательское соглашение</Typography>
                            </a>
                            <a style={{ textDecoration: "none" }} href="#">
                                <Typography lineHeight={"143%"} variant="h5">Политика конфиденциальности и оферта</Typography>
                            </a>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box bgcolor={"#eaeaea"} py={"26px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography lineHeight={"143%"} variant="h5">© 2022 Любое использование контента без письменного разрешения запрещено</Typography>
                        <Stack direction={"row"} alignItems={"center"} gap={"24px"}>
                            <a href="#">
                                <img src={payme} alt="icon" />
                            </a>
                            <a href="#">
                                <img src={uzcard} alt="icon" />
                            </a>
                            <a href="#">
                                <img src={humo} alt="icon" />
                            </a>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </footer>
    )
}