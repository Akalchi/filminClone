import React from 'react';
import { ClipLoader } from 'react-spinners';
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer'; 
import FilmsGrid from '../components/Grid/Grid';
import { useState, useEffect } from "react";
import { getTopRatedList } from "../services/apiServices";

const TOP_RATED_FILMS_URL = "https://api.themoviedb.org/3/movie/top_rated";

export default function FilmsPage() {
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTopRatedFilms() {
            try {
                const films = await getTopRatedList(TOP_RATED_FILMS_URL, "film"); 
                setTopRatedFilms(films);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }
        fetchTopRatedFilms();
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
            <h1 className='pt-5 pb-6 ml-12 font-bold text-2xl'>Las películas mejor valoradas </h1>
            <FilmsGrid data={topRatedFilms}/>
        <Footer />
    </>
    );
}

