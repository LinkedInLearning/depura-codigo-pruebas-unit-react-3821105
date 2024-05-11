import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../reducers/posts';
import perfilesReducer from '../reducers/perfiles'

const store = configureStore({
    reducer: {
        posts: postReducer,
        perfiles: perfilesReducer
    }
});

export default store;
