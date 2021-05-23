import { GET_IDS, SET_NEWS, SET_COMMENTS } from '../actions'

const initialState = {
  isLoaded: true,
  news: [],
  comments: []
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
      }; 

      case SET_COMMENTS:
        return {
          ...state,
          comments: action.comments
        }; 

    default:
      return state;
  };
};

export default mainState;

