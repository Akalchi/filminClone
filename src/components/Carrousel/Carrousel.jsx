import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import './Carrousel.css';


export default function Carrousel({list, listTitle, swiperId}) {
    const [showNav, setShowNav] = useState(false);
    const [prevIsDisabled, setprevIsDisabled] = useState(false);
    const [nextIsDisabled, setnextIsDisabled] = useState(false);
    const swiperRef = useRef(null);
    const films = list;
    const title = listTitle;
    
    const handleButtonVisibility = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            setprevIsDisabled(swiper.isBeginning);
            setnextIsDisabled(swiper.isEnd);
        }
    };

    const handleMouseEnter = () => {
        setShowNav(true);
        handleButtonVisibility();
    };

    const handleMouseLeave = () => {
        setShowNav(false);
        handleButtonVisibility();
    };

    return (
        <div
            className="swiper-container relative ml-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <h2 className='pt-5 pb-6 font-bold text-2xl'>{title}</h2>

            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                allowTouchMove={false}
                spaceBetween={16}
                navigation={{
                    prevEl: `swiper-button-prev-${swiperId}`,
                    nextEl: `swiper-button-next-${swiperId}`,
                }}
                modules={[Navigation]}
            >
                {films.map((film) => (
                    <SwiperSlide key={film.id}>
                        <img
                            className="h-full w-full object-fill transition-transform transform hover:scale-105
                            rounded"
                            src={`https://image.tmdb.org/t/p/w342${film.poster}`}
                            alt={film.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`swiper-button-prev swiper-button-prev-${swiperId} ${showNav ? 'swiper-button-visible' : 'swiper-button-hidden'} ${prevIsDisabled ? 'swiper-button-disabled' : ''}`}
            />
            <div
                className={`swiper-button-next swiper-button-next-${swiperId} ${showNav ? 'swiper-button-visible' : 'swiper-button-hidden'} ${nextIsDisabled ? 'swiper-button-disabled' : ''}`}
            />
        </div>
    );
}
