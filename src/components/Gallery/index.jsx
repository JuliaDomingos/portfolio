import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import './style.css';

const imagesData = [
    { src: "./assets/images/fotos/foto1.png", alt: "Imagem 1" },
    { src: "./assets/images/fotos/foto2.png", alt: "Imagem 2" },
    { src: "./assets/images/fotos/foto3.png", alt: "Imagem 3" },
    { src: "./assets/images/fotos/foto4.png", alt: "Imagem 4" },
    { src: "./assets/images/fotos/foto5.png", alt: "Imagem 5" },
    { src: "./assets/images/fotos/foto6.png", alt: "Imagem 6" },
    { src: "./assets/images/fotos/foto7.png", alt: "Imagem 7" },
    { src: "./assets/images/fotos/foto8.png", alt: "Imagem 8" },
];

export const ImageViewer = ({ images, selectedIndex, onClose }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && selectedIndex !== null) {
            swiperRef.current.swiper.slideTo(selectedIndex);
        }
    }, [selectedIndex]);

    return (
        <div className="image-viewer">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="swiper-container">
                <Swiper
                    className='mySwiper2'
                    modules={[EffectFade, Navigation, Zoom]}
                    loop
                    navigation
                    zoom
                    ref={swiperRef}
                    allowTouchMove={false}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            direction: 'horizontal',
                            allowTouchMove: false
                        },
                        280: {
                            direction: 'vertical',
                            allowTouchMove: true
                        }
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={image + index}>
                            <div className="image-container ">
                                <picture className='swiper-zoom-container'>
                                    {/* <source media="(max-width: 767px)" type="image/png" srcSet={`./assets/images/fotos/mobile/foto${index + 1}.png`} /> */}
                                    {/* <source media="(min-width: 1400px)" type="image/png" srcSet={`./assets/images/fotos/foto${index + 1}.png`} /> */}
                                    <img width={'auto'} height={'auto'} src={`./assets/images/fotos/foto${index + 1}.png`} alt={`foto${index + 1}`} loading="lazy" />
                                </picture>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImageViewer = (imageUrl, index) => {
        setSelectedImage(imageUrl);
        setSelectedIndex(index);
    };

    const closeImageViewer = () => {
        setSelectedImage(null);
        setSelectedIndex(null);
    };

    return (
        <div className="gallery">
            <div className="grid-container">
                {imagesData.map((image, index) => (
                    <div className={'grid-item'} key={image + index}>
                        <picture>
                            {/* <source media="(max-width: 767px)" type="image/png" srcSet={`./assets/images/fotos/mobile/foto${index + 1}.png`} /> */}
                            {/* <source media="(min-width: 1400px)" type="image/png" srcSet={`./assets/images/fotos/foto${index + 1}.png`} /> */}
                            <img width={'auto'} height={'auto'} src={`./assets/images/fotos/foto${index + 1}.png`} alt={`foto${index + 1}`} loading="lazy" onClick={() => openImageViewer(image.src, index)} />
                        </picture>
                    </div>
                ))}
            </div>
            {selectedImage && <ImageViewer images={imagesData} selectedIndex={selectedIndex} onClose={closeImageViewer} />}
        </div>
    );
}