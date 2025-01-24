import React from 'react';
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Header from '../components/Header/Header'; 
import Hero from '../components/Hero/Hero'; 
import Carrousel from '../components/Carrousel/Carrousel'; 
import Footer from '../components/Footer/Footer'; 
import { getPopularFilms, getFilmsByGenre } from '../services/apiServices';

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        popularFilmList: [],
        categoryFilmLists: []
    });

    const categories = [
        { id: 16, title: "Animación" },
        { id: 27, title: "Terror" },
        { id: 99, title: "Documental" },
        { id: 14, title: "Fantasia" },
        { id: 36, title: "Historia" },
        { id: 878, title: "Ciencia Ficción" },
        { id: 53, title: "Suspense" },
        { id: 12, title: "Aventura" },
        { id: 10749, title: "Romance" },
    ];

    useEffect(() => {
        async function fetchFilms() {
            try {
                const popularList = await getPopularFilms();
                const categoryLists = await Promise.all(categories.map(async (category) => {
                    const films = await getFilmsByGenre(category.id);
                    return { id: category.id, title: category.title, films };
                }));
                setData({ popularFilmList: popularList, categoryFilmLists: categoryLists });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching films:", error);
                setLoading(false);
            }
        }
        fetchFilms();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <ClipLoader color="#3dfba5" size={100} />
            </div>
        );
    }
    return (
        <>
            <Header />
            <Hero />
            <Carrousel key={"popularFilms"} swiperId="popularFilms" list={data.popularFilmList} listTitle={"Las películas más populares"} />
            {data.categoryFilmLists.map((category) => (
                <Carrousel key={category.id} swiperId={category.id} list={category.films} listTitle={category.title} />
            ))}
            <Footer />
        </>
    );
}


