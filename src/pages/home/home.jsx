import React from "react";
import { Banner } from "../../components/banner";
import { Stack, Skeleton, Container } from "@mui/material";
import { CategoryCard } from "../../components/category-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetCategory } from "../../service/query/useGetCategory";
import { ProductSlider } from "../../components/product-slider/product-slider";

export const Home = () => {
    const { data, isLoading } = useGetCategory();

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
        </main>
    );
};
