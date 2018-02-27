import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import todosReducer from './todos/todosReducer';

const reducers = combineReducers({
  todosReducer
});

const middleware = applyMiddleware(
  logger
);

export default function configureStore(initialState = {}) {
  return createStore(reducers, initialState, middleware);
}
