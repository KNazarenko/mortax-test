import { GET_MOVIES } from '../actions/type';

const initialState = {
  itemsOnPage: [],
  pages: null,
  // Current task
  currentTask: {}
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      console.log('reducer action data: ', action.payload.results);
      return {
        ...state,
        itemsOnPage: action.payload.results,
        pages: action.payload.total_pages
        // allTasksNumber: +action.payload.total_task_count
      };

    default:
      return state;
  }
}
