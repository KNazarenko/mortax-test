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
      return {
        ...state,
        itemsOnPage: action.payload.results,
        pages: action.payload.total_pages
      };
    case GET_MOVIES_FILTERS:
      return {
        ...state,
        itemsOnPage: action.payload.results,
        pages: action.payload.total_pages
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
        activePage: 1
      };
    case SET_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        activePage: 1
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    case GET_KEYWORD_MOVIES:
      return {
        ...state,
        keywordMovies: action.payload.results
      };
    case CLEAN_KEYWORD_MOVIES:
      return {
        ...state,
        keyword: '',
        keywordMovies: []
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        itemsOnPage: [action.payload]
      };

    default:
      return state;
  }
}
