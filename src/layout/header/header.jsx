import { Badge, Box, Button, Drawer, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useContext } from "react";
import { TelIcon } from "../../assets/icons/tel-icon";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { MenuIcon } from "../../assets/icons/menu-icon";
import { colors } from "../../mui-config/colors";
import { SearchIcon } from "../../assets/icons/search-icon";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import { useSelector } from "react-redux";
import { Login } from "../../components/login";
import { Register } from "../../components/register";
import { DrowerContext } from "../../context/drowerOpen";
import { loadState } from "../../utils/storage";

export const Header = () => {
    const [input, setInput] = React.useState("");
    const {open, setOpen} = useContext(DrowerContext);
    const [view, setView] = React.useState("login");
    const accessToken = loadState("userData");
    const navigate = useNavigate();

    const handleReset = () => {
        
        if(!accessToken) {
            setOpen(true)
        } else{
            navigate("/profile");
        }
    }


    const handleSearch = (e) => {
        if (e.key === "Enter" && input.trim()) {
            navigate(`/search?query=${encodeURIComponent(input.trim())}`);
        }
    };
    const { count } = useSelector((state) => state.product);
    return (
        <header>
            <Container maxWidth="xl">
                <Stack py={"8px"} direction={"row"} justifyContent={"end"} gap={"24px"} alignItems={"center"}>
                    <a style={{ textDecoration: "none" }} href="#">
                        <Typography variant="h4">Доставка и оплата</Typography>
                    </a>
                    <a style={{ textDecoration: "none" }} href="#">
                        <Typography variant="h4">Пункты выдачи</Typography>
                    </a>
                    <a style={{ textDecoration: "none" }} href="#">
                        <Typography variant="h4">Поддержка</Typography>
                    </a>
                    <Stack alignItems={"center"} direction={"row"} gap={"16px"}>
                        <IconButton><TelIcon /></IconButton>
                        <a style={{ textDecoration: "none" }} href="#">
                            <Typography variant="h4">+998 90 253 77 53</Typography>
                        </a>
                    </Stack>
                </Stack>
                <Stack py={"10px"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack direction={"row"} gap={"32px"} alignItems={"center"}>
                        <Link to={"/"}>
                            <img src={Logo} alt="" />
                        </Link>
                        <Button sx={{ backgroundColor: colors.gipermart, padding: "12px 45px 12px 12px", fontWeight: 400, fontSize: "20px", color: colors.m3syslightontertiarycontainer, }} startIcon={<MenuIcon />}>
                            Каталог
                        </Button>
                        <TextField onKeyDown={handleSearch} value={input} onChange={(e) => setInput(e.target.value)} style={{ width: "650px" }} InputProps={{
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
                        }} placeholder="Поиск" />
                    </Stack>
                    <Stack direction={"row"} gap={"32px"}>
                        <Stack gap={"4px"} alignItems={"center"}>
                            <IconButton onClick={handleReset}><ProfileIcon /></IconButton>
                            <Typography lineHeight={"100%"} variant="h4">Войти</Typography>
                        </Stack>
                        <Stack gap={"4px"} alignItems={"center"}>
                            <IconButton><LikeIcon /></IconButton>
                            <Typography lineHeight={"100%"} variant="h4">Избранное</Typography>
                        </Stack>
                        <Link style={{ textDecoration: "none" }} to={"/cart"}>
                            <Stack gap={"4px"} alignItems={"center"}>
                                <IconButton><Badge badgeContent={count ? count : "0"} color="error"><CartIcon /></Badge></IconButton>
                                <Typography lineHeight={"100%"} variant="h4">Корзина</Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Container>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box maxWidth={"346px"} p={"24px"}>
                    <IconButton style={{ textAlign: "right", marginBottom: "8px" }} onClick={() => setOpen(false)}>x</IconButton>
                    <Stack>{view === "login" ? <Login /> : <Register />}</Stack>
                    <Box>
                        {view === "login" ? (
                            <Button onClick={() => setView("register")} fullWidth variant="outlined">
                            Зарегистрироваться
                        </Button>
                        ) : (
                            <Button onClick={() => setView("login")} fullWidth variant="outlined">
                            Back to Login
                        </Button>
                        )}
                    </Box>
                    
                </Box>
            </Drawer>
        </header>
    )
}