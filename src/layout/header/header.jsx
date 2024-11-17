import { Badge, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { TelIcon } from "../../assets/icons/tel-icon";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { MenuIcon } from "../../assets/icons/menu-icon";
import { colors } from "../../mui-config/colors";
import { SearchIcon } from "../../assets/icons/search-icon";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";

export const Header = () => {
    const [input, setInput] = React.useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter" && input.trim()) {
            navigate(`/search?query=${encodeURIComponent(input.trim())}`);
        }
    };
    return (
       <header>
        <Container maxWidth="xl">
            <Stack py={"8px"} direction={"row"} justifyContent={"end"} gap={"24px"} alignItems={"center"}>
                <a style={{textDecoration: "none"}} href="#">
                    <Typography variant="h4">Доставка и оплата</Typography>
                </a>
                <a style={{textDecoration: "none"}} href="#">
                    <Typography variant="h4">Пункты выдачи</Typography>
                </a>
                <a style={{textDecoration: "none"}} href="#">
                    <Typography variant="h4">Поддержка</Typography>
                </a>
                <Stack alignItems={"center"} direction={"row"} gap={"16px"}>
                    <IconButton><TelIcon /></IconButton>
                    <a style={{textDecoration: "none"}} href="#">
                    <Typography variant="h4">+998 90 253 77 53</Typography>
                </a>
                </Stack>
            </Stack>
            <Stack py={"10px"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} gap={"32px"} alignItems={"center"}>
                    <Link to={"/"}>
                        <img src={Logo} alt="" />
                    </Link>
                    <Button sx={{backgroundColor: colors.gipermart, padding: "12px 45px 12px 12px", fontWeight: 400, fontSize: "20px", color: colors.m3syslightontertiarycontainer,}} startIcon={<MenuIcon />}>
                        Каталог
                    </Button>
                    <TextField onKeyDown={handleSearch} value={input} onChange={(e) => setInput(e.target.value)} style={{width: "650px"}} InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }} sx={{
                padding: "16px",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: colors.m3syslightoutline, // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: colors.gipermart, // Hover holatidagi border rangi
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: colors.gipermart, // Fokus holatidagi border rangi
                    },
                },
            }} placeholder="Поиск"/>
                </Stack>
                <Stack direction={"row"} gap={"32px"}>
                    <Stack gap={"4px"} alignItems={"center"}>
                        <IconButton><ProfileIcon /></IconButton>
                        <Typography lineHeight={"100%"} variant="h4">Войти</Typography>
                    </Stack>
                    <Stack gap={"4px"} alignItems={"center"}>
                        <IconButton><LikeIcon /></IconButton>
                        <Typography lineHeight={"100%"} variant="h4">Избранное</Typography>
                    </Stack>
                    <Stack gap={"4px"} alignItems={"center"}>
                        <IconButton><Badge badgeContent={3} color="error"><CartIcon /></Badge></IconButton>
                        <Typography lineHeight={"100%"} variant="h4">Корзина</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
       </header>
    )
}