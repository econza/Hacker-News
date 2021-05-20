import { GET_IDS, SET_NEWS } from '../actions'

const initialState = {
  isLoaded: true,
  news: []
};

const mainState = (state = initialState, action) => {
  switch (action.type) {
    case GET_IDS:
      return {
        ...state,
        ids: action.ids
      };

    case SET_NEWS:
      return {
        ...state,
        news: action.news
      }

    default:
      return state;
  };
};

export default mainState;

