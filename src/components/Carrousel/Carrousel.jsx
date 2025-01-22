import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import './Carrousel.css';
import { Navigation } from "swiper/modules";

export default function Carrousel() {
    const [showNav, setShowNav] = useState(false);
    const [prevIsDisabled, setprevIsDisabled] = useState(false);
    const [nextIsDisabled, setnextIsDisabled] = useState(false);
    const [films, setFilms] = useState([]); 
    const swiperRef = useRef(null);

    const API_KEY = 'd2ca0f1d4424de282a51abb79cdb2ed1';
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

    async function getPopularFilms() {
        try {
            const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=es-ES&page=1`);
            if (!response.ok) {
                throw new Error('No se pudo obtener las películas populares');
            }
            const data = await response.json();
            return data.results.slice(0, 10);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            return [];
        }
    }

    useEffect(() => {
        async function fetchFilms() {
            const filmsData = await getPopularFilms();
            setFilms(filmsData); // Actualiza el estado con las películas obtenidas
        }
        fetchFilms();
    }, []); 

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

            <h2 className='pt-5 pb-6 font-bold text-2xl'>El mejor cine reciente en exclusiva</h2>

            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                allowTouchMove={false}
                spaceBetween={16}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[Navigation]}
            >
                {films.map((film) => (
                    <SwiperSlide key={film.id}>
                        <img
                            className="h-full w-full object-cover transition-transform transform hover:scale-105
                            rounded"
                            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                            alt={film.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`swiper-button-prev ${showNav ? 'swiper-button-visible' : 'swiper-button-hidden'} ${prevIsDisabled ? 'swiper-button-disabled' : ''}`}
            />
            <div
                className={`swiper-button-next ${showNav ? 'swiper-button-visible' : 'swiper-button-hidden'} ${nextIsDisabled ? 'swiper-button-disabled' : ''}`}
            />
        </div>
    );
}
