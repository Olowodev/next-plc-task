import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './searchRedux';




export default configureStore({
    reducer:{ search: searchReducer},
    
});
