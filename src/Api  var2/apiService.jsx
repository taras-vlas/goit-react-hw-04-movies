/*              API themoviedb.org
 * https://developers.themoviedb.org/3/trending/get-trending - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
 * https://developers.themoviedb.org/3/search/search-movies - пошук фільму по ключовому слову на сторінці фільмів.
 * https://developers.themoviedb.org/3/movies/get-movie-details - запит повної інформації про фільм для сторінки кінофільму.
 * https://developers.themoviedb.org/3/movies/get-movie-credits - запит інформації про акторський склад для сторінки кінофільму.
 * https://developers.themoviedb.org/3/movies/get-movie-reviews - запит оглядів для сторінки кінофільму.
 * 
 *  Фетч fetchArticles по пошуковому запросу
 */
import axios from 'axios';
import { API_KEY, BASE_URL,  IMG_SERVER} from './apiVars';
import PropTypes from 'prop-types';

// Фетч трендових фильмів

const getTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  }
  catch (error) {
    return console.error('Something wrong with API search fetch: ' + error);
  }
};

// Фетч за пошуковим запитом
const getSearchMovies = async searchQuery => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  }
  catch (error) {
    return console.error('Something wrong with API search fetch: ' + error);
  }
};

// Фетч повної інформації про фільм по ID
const getMovieDetails = async id => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  }
  catch (error) {
    return console.error('Something wrong with API search fetch: ' + error);
  }
};

// Фетч про акторський склад фільму по ID
const getMovieCredits = async id => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.cast;
  }
  catch (error) {
    return console.error('Something wrong with API search fetch: ' + error);
  }
}

// Фетч переглядів фільму по ID
const getMovieReviews = async id => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  }
  catch (error) {
    return console.error('Something wrong with API search fetch: ' + error);
  }
};


getSearchMovies.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default {
  getTrendingMovies,   
  getSearchMovies,     
  getMovieDetails,     
  getMovieCredits,     
  getMovieReviews,     

  IMG_SERVER
}


