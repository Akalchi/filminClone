import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/homepage';
import MoviesPage from './pages/movies';
import SeriesPage from './pages/series';
import { useState, useEffect } from 'react';
import { getPopularFilms, getFilmsByGenre } from './services/apiServices';

function App() {
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

    const [data, setData] = useState({
        popularFilmList: [],
        categoryFilmLists: []
    });

    useEffect(() => {
        async function fetchFilms() {
            try {
                const popularList = await getPopularFilms();
                const categoryLists = await Promise.all(categories.map(async (category) => {
                    const films = await getFilmsByGenre(category.id);
                    return { id: category.id, title: category.title, films };
                }));
                setData({ popularFilmList: popularList, categoryFilmLists: categoryLists });
            } catch (error) {
                console.error("Error fetching films:", error);
            }
        }
        fetchFilms();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage data={data} />} />
                <Route path="/peliculas" element={<MoviesPage />} />
                <Route path="/series" element={<SeriesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
