import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//reducer import
import userReducer from './userReducer';

const reducer = combineReducers({
  user: persistReducer({ key: 'user', storage }, userReducer)
});

export default reducer;