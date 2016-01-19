import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// mapping of our state!
// we never want more than one store in our app
// therefore, to keep concerns seperated, we use combineReducers to create a single root reducer
const rootReducer = combineReducers({

  books: BooksReducer,
  activeBook: ActiveBookReducer

});

export default rootReducer;
