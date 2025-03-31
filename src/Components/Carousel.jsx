import React from 'react'
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { path } from '../common/path';

const Carousel = () => {
    const slides = [
        { id: 1, title: "Kiểm tra huyết áp", image: "./../../colourful_watercolour_splatte.jpg", link: path.randomDefaultLottery },
        { id: 2, title: "Random Mega 6/45", image: "./../../lottery_1.png", link: path.randomMega },
        { id: 3, title: "Random Power 6/55", image: "./../../lottery_2.png", link: path.randomPower },
    ];

    return (
        <div className='container'>
            <div className="row">
                <div className='col'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0} // Không có khoảng cách giữa các slide
                        slidesPerView={1} // Mỗi lần chỉ hiển thị 1 slide
                        navigation
                        pagination={{ clickable: true }} // Hiển thị chấm điều hướng
                        autoplay={{ delay: 10000 }} // Slide tự động chuyển sau 3s
                        loop={true} // Lặp vô hạn
                    //  // Cố định chiều cao slider
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} style={{ width: "100%", height: "100%", textAlign: "center" }}>
                                <a href={slide.link}>
                                    <h5 className="text-center mt-2 text-lg font-bold">{slide.title}</h5>
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
                </div>
            </div>
        </div>

    );
}


export default Carousel