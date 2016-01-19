import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// mapping of our state!
// we never want more than one store in our app
// therefore, to keep concerns seperated, we use combineReducers to create a single root reducer
const rootReducer = combineReducers({

  books: BooksReducer

});

export default rootReducer;
