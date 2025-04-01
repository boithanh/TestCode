import React from 'react'
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { path } from '../common/path';

const Carousel = () => {
    const slides = [
        { id: 1, title: "Kiểm tra huyết áp", image: "./../../colourful_watercolour_splatte.jpg", link: path.bloodPressure },
        { id: 1, title: "Random vé số kiến thiết", image: "./../../lottery_1.png", link: path.randomDefaultLottery },
        { id: 2, title: "Random Mega 6/45", image: "./../../lottery_2.png", link: path.randomMega },
        { id: 3, title: "Random Power 6/55", image: "./../../lottery_3.png", link: path.randomPower },
    ];

    return (
        <>
            <div className='text-center'><h1 className='mb-3'>Welcome to app panel</h1></div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0} // Không có khoảng cách giữa các slide
                slidesPerView={1} // Mỗi lần chỉ hiển thị 1 slide
                navigation
                pagination={{ clickable: true }} // Hiển thị chấm điều hướng
                autoplay={{ delay: 5000 }} // Slide tự động chuyển sau 3s
                loop={true} // Lặp vô hạn
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ width: "100%", height: "100%", textAlign: "center" }}>
                        <a href={slide.link}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                style={{ height: "500px", width: "1140px", objectFit: "cover" }}
                                className='img-fluid'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}


export default Carousel