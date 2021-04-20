import axios from 'axios';
import { API_KEY, BASE_URL,  IMG_SERVER} from './apiVars';
import PropTypes from 'prop-types';

axios.defaults.baseURL = BASE_URL;

const getTrendingMovies = (page = 1) => {
  return axios.get(`/trending/movie/day?page=${page}&api_key=${API_KEY}`)
    .then((responce) => {
    return responce.data.results;
    });
};

const getSearchMovies = (query) => {
  return axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`)
    .then((responce) => {
    return responce.data.results;
    });
};

const getMovieDetails = (id) => {
  return axios.get(`/movie/${id}?api_key=${API_KEY}`)
    .then((responce) => {
    return responce.data;
  });
};

const getMovieCredits = (id) => {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
    .then((responce) => {
    return responce.data.cast;
    });
};

const getMovieReviews = (id) => {
  return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    .then((responce) => {
    return responce.data.results;
    });
};


getSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

export default {
  getTrendingMovies,   
  getSearchMovies,     
  getMovieDetails,     
  getMovieCredits,     
  getMovieReviews,     

  IMG_SERVER
};
