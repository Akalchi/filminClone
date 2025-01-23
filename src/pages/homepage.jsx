import React from 'react';
import Header from '../components/Header/Header'; // Actualiza la ruta de importación
import Hero from '../components/Hero/Hero'; // Actualiza la ruta de importación
import Carrousel from '../components/Carrousel/Carrousel'; // Actualiza la ruta de importación
import Footer from '../components/Footer/Footer'; // Actualiza la ruta de importación

export default function HomePage({ data }) {
    return (
        <>
            <Header />
            <Hero />
            <Carrousel key={"popularFilms"} swiperId="popularFilms" list={data.popularFilmList} listTitle={"Las películas más populares"}/>
            {data.categoryFilmLists.map((category) => (
                <Carrousel key={category.id} swiperId={category.id} list={category.films} listTitle={category.title} />
            ))}
            <Footer />
        </>
    );
}
