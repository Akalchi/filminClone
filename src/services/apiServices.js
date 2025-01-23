const API_KEY = 'd2ca0f1d4424de282a51abb79cdb2ed1';
const FILM_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const FILM_CATEGORIES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularFilms() {
    try {
        const response = await fetch(`${FILM_POPULAR_URL}?api_key=${API_KEY}&language=es-ES&page=1`);
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

export async function getMoviesByGenre (genreId)  {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=es-ES`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log (data.results);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}; 

