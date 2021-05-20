import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainState from './reducers/mainState';

export const rootReducer = combineReducers({
  mainState: mainState,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
