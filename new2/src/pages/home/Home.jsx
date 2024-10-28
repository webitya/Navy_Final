import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAppContext } from "../../../context";
import { useGetBanner } from "../../../hooks/useGetBanner";

export const Home = () => {

    const { user } = useAppContext();
    const [banner, setBanner] = useState([])


    useEffect(() => {
        const fetchBanner = async () => {
            const allBenner = await useGetBanner(setBanner);

            // setBanner(allBenner.data)
        }
        fetchBanner();
    }, [])

    return (
        <div className="w-full  flex items-center justify-center">
            <div className="w-full h-screen overflow-hidden rounded-lg shadow-lg">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={Math.min(1, banner.length)}
                    slidesPerGroup={1}
                    loop={banner.length > 1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {banner.map((slide) => (
                        <SwiperSlide key={slide._id}>
                            <div className="w-full h-[60vh] bg-cover">
                                <img className="h-full w-full" src={slide.imageUri} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};
