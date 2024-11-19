import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { ProductCard } from "../product-card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { LeftIcon } from "../../assets/icons/left-icon";
import { RightIcon } from "../../assets/icons/right-icon";
import "./style.css"
import { useGetProducts } from "../../service/query/useGetProducts";


export const ProductSlider = ({ path, title }) => {
    const { data, isLoading } = useGetProducts(path);
    return (
        <Box pt={"16px"} pb={"48px"}>
            <Container maxWidth="xl">
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} pb={"24px"} pt={"16px"}>
                    <Typography variant="h3">{title}</Typography>
                    <Stack direction={"row"}>
                        <button className="arrow-left arrow"><LeftIcon /></button>
                        <button className="arrow-right arrow"><RightIcon /></button>
                    </Stack>
                </Stack>
                <Stack direction={"row"}>
                    {isLoading ? (
                        <Typography>Loading</Typography>
                    ) : (
                        <Swiper style={{ padding: "10px" }}
                            modules={[Navigation, Autoplay]}
                            slidesPerView={6}
                            spaceBetween={20}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            navigation={{
                                nextEl: ".arrow-right",
                                prevEl: ".arrow-left",
                            }}
                        >
                            {data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ProductCard  {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </Stack>
            </Container>
        </Box>
    )
}