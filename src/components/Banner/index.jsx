import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules';
import { Cols } from '../Cols'
import { Link } from 'react-router-dom'
import { Section } from '../Section';
import 'swiper/css';
import 'swiper/css/effect-fade';

import './style.css'


export const Banner = ({ quantidade }) => {

    const handleSlideChange = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const allSlides = swiper.slides;

        allSlides.forEach((slide) => {
            slide.classList.remove('active-slide');
        });

        activeSlide.classList.add('active-slide');
    };

    return (
        <Section content="banner" conteudo={
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <Cols classic={'col-lg-12 text-center px-0'} conteudo={
                        <Link to={'/design'}>
                            <Swiper
                                onSwiper={(swiper) => handleSlideChange(swiper)}
                                className='mySwiper'
                                modules={[EffectFade, Autoplay]}
                                loop
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false}
                                effect="fade"
                                speed={1200}
                                slidesPerView={1}
                            >
                                {[1, 2, 3, 4].map((i) => {
                                    return (
                                        <SwiperSlide key={`swiper-slide-${i}`}>
                                            <picture>
                                                {/* <source media="(max-width: 767px)" type="image/png" srcSet={`./assets/images/fotos/mobile/foto${i}.png`} /> */}
                                                <source media="(min-width: 1400px)" srcSet={`./assets/images/fotos/foto${i}.png`} />
                                                <img width={'auto'} height={'auto'} src={`./assets/images/fotos/foto${i}.png`} alt={`foto${i}`} />
                                            </picture>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </Link>
                    } />
                </div>
            </div>
        } />
    )
}