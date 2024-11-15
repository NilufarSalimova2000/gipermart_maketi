import React from "react";
import { Banner } from "../../components/banner";
import { Stack, Skeleton } from "@mui/material";
import { CategoryCard } from "../../components/category-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useGetCategory } from "../../service/query/useGetCategory";

export const Home = () => {
    const { data, isLoading } = useGetCategory();

    return (
        <main>
            <Banner />
            <Stack py={4}>
                <Stack direction="row" alignItems="center" mx={4} py={4}>
                    {isLoading ? (
                        // Skeleton ko'rsatish
                        <Stack direction="row" gap={2}>
                            {[...Array(5)].map((_, index) => (
                                <Skeleton
                                    key={index}
                                    variant="rectangular"
                                    width={240}
                                    height={120}
                                    sx={{ borderRadius: "4px" }}
                                />
                            ))}
                        </Stack>
                    ) : (
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
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
            </Stack>
        </main>
    );
};
