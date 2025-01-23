import Film from "../models/film.js";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const FILM_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';

export async function getPopularFilms() {
    try {
        const response = await fetch(`${FILM_POPULAR_URL}?api_key=${API_KEY}&language=es-ES&page=1`);
        if (!response.ok) {
            throw new Error('No se pudo obtener las películas populares');
        }
        const data = await response.json();
        let results = data.results.slice(0, 15);
        const films = results.map((film) => new Film(film.id, film.title, film.poster_path));
        return films;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        return [];
    }
}

export async function getFilmsByGenre (genreId)  {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=es-ES&page=1`);
    if (!response.ok) {
      throw new Error('No se pudo obtener las películas populares');
    }
    const data = await response.json();
    let results = data.results.slice(0, 15);
    const films = results.map((film) => new Film(film.id, film.title, film.poster_path));
    return films;

  } catch (error) {
    console.error('Error al obtener las películas:', error);
    throw error;
  }
}; 

