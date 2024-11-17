import React from "react";
import { Banner } from "../../components/banner";
import { Stack, Skeleton, Container, Typography } from "@mui/material";
import { CategoryCard } from "../../components/category-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetCategory } from "../../service/query/useGetCategory";
import { ProductSlider } from "../../components/product-slider/product-slider";
import { useGetAksiya } from "../../service/query/useGetAksiya";
import { useGetBrand } from "../../service/query/useGetBrand";
import { BrandCard } from "../../components/brand-card/brand-card";
import { HomeCard } from "../../components/home-card";

export const Home = () => {
    const { data, isLoading } = useGetCategory();
    const { data: aksiyaData, isLoading: aksiyaLoading } = useGetAksiya();
    const { data: brandData, isLoading: brandLoading } = useGetBrand();

    return (
        <main>
            <Banner />

            <Stack py={"32px"}>
                <Container maxWidth="xl">
                    <Stack direction="row" alignItems="center" >
                        {isLoading ? (
                            // Skeleton ko'rsatish
                            <Stack direction="row" gap={2}>
                                {[...Array(5)].map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        variant="rectangular"
                                        width={304}
                                        height={200}
                                        sx={{ borderRadius: "4px" }}
                                    />
                                ))}
                            </Stack>
                        ) : (
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}

                            >
                                {data?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <CategoryCard {...item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        <div ></div>
                    </Stack>
                </Container>
            </Stack>

            <ProductSlider path={"phones"} title={"Смартфоны и планшеты"} />

            <Stack bgcolor={"pink"} pt={"16px"} pb={"30px"}>
                <Container maxWidth="xl">
                    <Typography mb={"24px"} variant="h3">Акции</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {aksiyaLoading ? (
                            <Typography>Loading</Typography>
                        ) : (
                            aksiyaData?.map((item) => (
                                <img key={item.id} src={item.img} alt="imag" />
                            ))
                        )}
                    </Stack>
                </Container>
            </Stack>

            <Stack py={"32px"}>
                <Container maxWidth="xl">
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <HomeCard path={"sport"} name={"Спорт"} />
                        <HomeCard path={"steeringWheel"} name={"Авто мото товары"} />
                        <HomeCard path={"washingM"} name={"Бытовая техника"} />
                    </Stack>
                </Container>
            </Stack>

            <ProductSlider path={"phones"} title={"Смартфоны и планшеты"} />
            <ProductSlider path={"notebook"} title={"Ноутбуки, планшеты и компьютеры"} />

            <Stack pb={"105px"}>
                <Container maxWidth="xl">
                    <Typography mb={"24px"} variant="h3">Популярные бренды</Typography>
                    <Stack gap={'16px'} direction={"row"} flexWrap={"wrap"}>
                        {brandLoading ? (
                            <Typography>Loading</Typography>
                        ) : (
                            brandData?.map((item) => (
                                <BrandCard key={item.id} img={item.img} />
                            ))
                        )}
                    </Stack>
                </Container>
            </Stack>

        </main>
    );
};
