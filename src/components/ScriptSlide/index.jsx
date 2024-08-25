import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ScriptSlide = () => {
    const imagesData = [
        { src: "./assets/images/fotos/foto1.png", alt: "Identidade visual" },
        { src: "./assets/images/fotos/foto2.png", alt: "Guima Conseco" },
        { src: "./assets/images/fotos/foto3.png", alt: "Anne" },
        { src: "./assets/images/fotos/foto4.png", alt: "Instituto Guima" },
        { src: "./assets/images/fotos/foto5.png", alt: "Jaez Music" },
        { src: "./assets/images/fotos/foto6.png", alt: "Bliss" },
        { src: "./assets/images/fotos/foto7.png", alt: "Movimento Grunge" },
        { src: "./assets/images/fotos/foto8.png", alt: "Poster Cinema" },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 3,
                }
            }}
        >
            {imagesData.map((image, index) => (
                <SwiperSlide key={image.src + index}>
                    <Link to={`/design/${index}`} className="slide-link">
                        <div className="grid-item" data-alt={image.alt}>
                            <picture>
                                {/* <source media="(max-width: 767px)" type="image/png" srcSet={`./assets/images/fotos/mobile/foto${index + 1}.png`} /> */}
                                {/* <source media="(min-width: 1400px)" type="image/png" srcSet={`./assets/images/fotos/foto${index + 1}.png`} /> */}
                                <img
                                    width={'auto'}
                                    height={'auto'}
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
