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
//1. Search
// const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Jack+Reacher`;
//2. Query For Details
// const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;
//3. Query For Details with Append To Response
// const url = `https://api.themoviedb.org/3/movie/157336?api_key=${api_key}&append_to_response=videos,images`;
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&page=1`;

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

export const getMovies = (page, year) => async dispatch => {
  // console.log('getMovies');
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&page=${page}`;
  const res = await axios.get(url);
  console.log('getMovies answer: ', res.data);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const getMoviesFilters = (page, year, genre) => async dispatch => {
  // console.log('getMoviesFilter');
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&with_genres=${genre}&page=${page}`;
  const res = await axios.get(url);
  console.log('getMoviesFilters answer: ', res.data);
  dispatch({
    type: GET_MOVIES_FILTERS,
    payload: res.data
  });
};

export const getMovieById = id => async dispatch => {
  console.log('getMovieById: ', id);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  const res = await axios.get(url);
  console.log('getMoviesFilters answer: ', res.data);
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
  // console.log('setYear action: ', year);
  return {
    type: SET_YEAR,
    payload: year
  };
}

export function setGenre(genre) {
  // console.log('setGenre action: ', genre);
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
  console.log('setKeyword action: ', word);
  return {
    type: SET_KEYWORD,
    payload: word
  };
}

export const getMoviesByKeyword = word => async dispatch => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${word}&page=1`;

  const res = await axios.get(url);
  console.log('getMoviesByKeyword answer: ', res.data);
  dispatch({
    type: GET_KEYWORD_MOVIES,
    payload: res.data
  });
};

export function cleanKeywordMovies() {
  console.log('unsetKeyword action: ');
  return {
    type: CLEAN_KEYWORD_MOVIES
  };
}
