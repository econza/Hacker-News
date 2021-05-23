import { GET_IDS, SET_NEWS, SET_COMMENTS, SET_SUBCOMMENTS } from '../actions'

const initialState = {
  isLoaded: true,
  news: [],
  comments: [],
  subComments: undefined
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

      case SET_SUBCOMMENTS:
        return {
          ...state,
          subComments: {
            ...state.subComments,
            [action.commentId]: action.subComments
          }
        }

    default:
      return state;
  };
};

export default mainState;

