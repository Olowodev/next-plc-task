import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const search = createAsyncThunk('search', async (searchTerm) => {
    const res = await axios.get(
        'http://localhost:8000', 
        searchTerm
    )  
    return res.data.results;
})


const searchSlice = createSlice ({
    name: 'search',
    initialState: {
        searchResults: [],
        isFetching: false,
        error: null,
    },
    reducers: {
        /*searchStart: (state)=>{
            state.isFetching=true
        },
        searchSuccess: (state, action)=>{
            state.isFetching=false;
            state.error= null;
            state.searchResults=action.payload;
        },
        searchFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
            state.currentUser= null;
        },*/
    },
    extraReducers: {
        [search.pending]: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        [search.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.searchResults = action.payload;
            state.error = false;
        },
        [search.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
});

export const { searchStart,searchSuccess,searchFailure} = searchSlice.actions;
export default searchSlice.reducer;