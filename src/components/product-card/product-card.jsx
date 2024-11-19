import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import styled from "@emotion/styled";
import { colors } from "../../mui-config/colors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../../redux/reducers/product-reducer";
import { ShowIcon } from "../../assets/icons/show-icon";

const CartButton = styled(Button)`
    padding: 6px;
    transition: all 0.3s ease;
    background-color: ${colors.gipermart};
    &:hover {
        background-color: ${colors.korzinka};
    }
`

export const ProductCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isInReduxCart = useSelector((state) =>
        state.product.product_list.some((item) => item.id === props.id)
    );
    const [isAdded, setIsAdded] = useState(isInReduxCart);

    const handleButtonClick = () => {
        if (!isAdded) {
            dispatch(addCart(props));
            setIsAdded(true); 
        } else {
            navigate("/cart");
        }
    };
    return (
        <Stack height={"368px"} sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: '0 0 15px -1px rgba(0,0,0,0.6)',
            },
        }} width={"214px"} p={"15px"} justifyContent={"space-between"} direction={"column"}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"} mb={"14px"}>
                <img width={"165px"} src={props.img} alt="imag" />
                <IconButton><LikeIcon /></IconButton>
            </Stack>
            <Typography variant="h4">{props.brand}</Typography>
            <Link style={{ textDecoration: "none" }} to={`/product-detail/${props.id}`}><Typography mb={"27px"} variant="h4">{props.title}{props.rame}{props.color}</Typography></Link>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mt={"auto"}>
                <Typography fontSize={"18px"} variant="h3">{props.price} Сум</Typography>
                <CartButton onClick={handleButtonClick}>{isAdded ? <ShowIcon /> : <CartIcon />}</CartButton>
            </Stack>
        </Stack>
    )
}