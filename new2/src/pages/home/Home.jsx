import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAppContext } from "../../../context";
import { useGetBanner } from "../../../hooks/useGetBanner";

const slides = [
    { id: 1, text: "Welcome to our Store", bgColor: "bg-red-500" },
    { id: 2, text: "Discover Amazing Products", bgColor: "bg-blue-500" },
    { id: 3, text: "Hassle-free Shopping", bgColor: "bg-green-500" },
    { id: 4, text: "Exciting Offers for You", bgColor: "bg-yellow-500" },
];

export const Home = () => {

    const { user } = useAppContext();
    const [banner, setBanner] = useState([])


    useEffect(() => {
        const fetchBanner = async () => {
            const allBenner = await useGetBanner(setBanner);
            console.log(allBenner);

            setBanner(allBenner.data)
        }
        fetchBanner();
    }, [])

    return (
        <div className="w-full  flex items-center justify-center">
            <div className="w-full h-screen overflow-hidden rounded-lg shadow-lg">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {banner && banner.length && banner.map((slide) => (
                        <SwiperSlide key={slide._id}>
                            <div
                                className={`w-full h-[60vh] bg-cover `}
                            >
                                <img className=" h-full w-full " src={slide.imageUri} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
