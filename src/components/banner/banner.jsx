import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Navigation } from 'swiper/modules';
import { useGetBanner } from "../../service/query/useGetBanner";
import { Box, Skeleton } from "@mui/material";

export const Banner = () => {
    const { data, isLoading } = useGetBanner();

    return (
        <Box>
            {isLoading ? (
                <Skeleton variant="rectangular" width="100%" height={400} />
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    slidesPerView={1}
                    navigation={true} 
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {data?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img style={{ width: "100%" }} src={item.img} alt="#" />
                        </SwiperSlide>
                    ))}
                    <div className="custom-next swiper-button-next"></div> {/* O'ng tomondagi strelka */}
                </Swiper>
            )}
        </Box>
    );
};
