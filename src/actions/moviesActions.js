import { GET_MOVIES } from './type';

import axios from 'axios';

const api_key = '5874acfd11651a28c55771624f7021f4';
//1. Search
// const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Jack+Reacher`;
//2. Query For Details
// const url = `https://api.themoviedb.org/3/movie/343611?api_key=${api_key}`;
//3. Query For Details with Append To Response
// const url = `https://api.themoviedb.org/3/movie/157336?api_key=${api_key}&append_to_response=videos,images`;
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=${year}&page=1`;

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

export const getMovies = (page, sort) => async dispatch => {
  console.log('getMovies');
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=2019&page=${page}`;
  const res = await axios.get(url);
  // await axios.get(url).then(response => console.log(response.data));
  console.log('answer: ', res.data);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

/**
|--------------------------------------------------
| Add data
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Edit data
|--------------------------------------------------
*/
