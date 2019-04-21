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
} from '../actions/type';

export const initialState = {
  itemsOnPage: [],
  pages: null,
  year: 2018,
  activePage: 1,
  activeGenre: 0,
  keyword: '',
  keywordMovies: []
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      console.log('GET_MOVIES_items: ', action.payload.results);
      console.log('GET_MOVIES_pages: ', action.payload.total_pages);
      return {
        ...state,
        itemsOnPage: action.payload.results,
        pages: action.payload.total_pages
      };
    case GET_MOVIES_FILTERS:
      console.log('GET_MOVIES_FILTERS_items: ', action.payload.results);
      console.log('GET_MOVIES_FILTERS_pages: ', action.payload.total_pages);
      return {
        ...state,
        itemsOnPage: action.payload.results,
        pages: action.payload.total_pages
      };
    case SET_ACTIVE_PAGE:
      console.log('SET_ACTIVE_PAGE: ', action.payload);
      return {
        ...state,
        activePage: action.payload
      };
    case SET_YEAR:
      console.log('SET_YEAR: ', action.payload);
      return {
        ...state,
        year: action.payload
      };
    case SET_GENRE:
      console.log('SET_GENRE: ', action.payload);
      return {
        ...state,
        activeGenre: action.payload
      };
    case SET_KEYWORD:
      console.log('SET_KEYWORD: ', action.payload);
      return {
        ...state,
        keyword: action.payload
      };
    case GET_KEYWORD_MOVIES:
      console.log('GET_KEYWORD_MOVIES_items: ', action.payload.results);
      return {
        ...state,
        keywordMovies: action.payload.results
      };
    case CLEAN_KEYWORD_MOVIES:
      console.log('CLEAN_KEYWORD_MOVIES');
      return {
        ...state,
        keyword: '',
        keywordMovies: []
      };
    case GET_MOVIE_BY_ID:
      console.log('GET_MOVIE_BY_ID: ', action.payload.results);
      return {
        ...state,
        itemsOnPage: [action.payload]
      };

    default:
      return state;
  }
}
