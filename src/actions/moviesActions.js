import {
  GET_MOVIES,
  GET_MOVIES_FILTERS,
  SET_ACTIVE_PAGE,
  SET_YEAR,
  SET_GENRE,
  SET_KEYWORD,
  GET_KEYWORD_MOVIES,
  CLEAN_KEYWORD_MOVIES,
  GET_MOVIE_BY_ID
} from './type';

import axios from 'axios';

const api_key = '5874acfd11651a28c55771624f7021f4';

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

export const getMovies = (page, year) => async dispatch => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&page=${page}`;
  const res = await axios.get(url);
  // console.log('getMovies answer: ', res.data);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const getMoviesFilters = (page, year, genre) => async dispatch => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&with_genres=${genre}&page=${page}`;
  const res = await axios.get(url);
  // console.log('getMoviesFilters answer: ', res.data);
  dispatch({
    type: GET_MOVIES_FILTERS,
    payload: res.data
  });
};

export const getMovieById = id => async dispatch => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  const res = await axios.get(url);
  dispatch({
    type: GET_MOVIE_BY_ID,
    payload: res.data
  });
};

/**
|--------------------------------------------------
| Pagination
|--------------------------------------------------
*/

export function setActivePage(page) {
  return {
    type: SET_ACTIVE_PAGE,
    payload: page
  };
}

/**
|--------------------------------------------------
| Filtering
|--------------------------------------------------
*/

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  };
}

export function setGenre(genre) {
  return {
    type: SET_GENRE,
    payload: genre
  };
}

/**
 |--------------------------------------------------
 | Searching
 |--------------------------------------------------
 */

export function setKeyword(word) {
  return {
    type: SET_KEYWORD,
    payload: word
  };
}

export const getMoviesByKeyword = word => async dispatch => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${word}&page=1`;
  const res = await axios.get(url);
  dispatch({
    type: GET_KEYWORD_MOVIES,
    payload: res.data
  });
};

export function cleanKeywordMovies() {
  return {
    type: CLEAN_KEYWORD_MOVIES
  };
}
