import MediaItem from "../models/mediaItem.js";


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
        const films = results.map((film) => new MediaItem(film.id, film.title, film.poster_path));
        return films;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        throw error;
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
    const films = results.map((film) => new MediaItem(film.id, film.title, film.poster_path));
    return films;

  } catch (error) {
    console.error('Error al obtener las películas:', error);
    throw error;
  }
}; 

export async function getTopRatedList(url, type) {
  try {
    const response = await fetch(`${url}?api_key=${API_KEY}&language=es-ES&page=1`);
    if (!response.ok) {
      throw new Error('No se pudo obtener las películas populares');
    }
    const data = await response.json();
    let results = data.results.slice(0, 16);
    const mediaItems = results.map((mediaItem) => {
      const title = type === 'film' ? mediaItem.title : mediaItem.name; //TODO: sndfkjefn
      return new MediaItem(mediaItem.id, title, mediaItem.poster_path, mediaItem.vote_average);
    });    
    return mediaItems;
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    throw error;
  }
};



