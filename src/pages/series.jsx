import React from 'react';
import { ClipLoader } from 'react-spinners';
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer'; 
import SeriesGrid from '../components/Grid/Grid';
import { useState, useEffect } from "react";
import { getTopRatedList } from "../services/apiServices";

const TOP_RATED_SERIES_URL = "https://api.themoviedb.org/3/tv/top_rated";

export default function SeriesPage() {
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTopRatedSeries() {
            try {
                const series = await getTopRatedList(TOP_RATED_SERIES_URL, "serie"); 
                setTopRatedSeries(series);
                setLoading (false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }
        fetchTopRatedSeries();
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
            <h1 className='pt-5 pb-6 ml-12 font-bold text-2xl'>Las series mejor valoradas </h1>
            <SeriesGrid data={topRatedSeries}/>
        <Footer />
    </>
    );
}
