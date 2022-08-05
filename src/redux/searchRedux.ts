import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import type { PayloadAction } from "@reduxjs/toolkit";


/*export const search = createAsyncThunk('search', async (searchTerm: string) => {
    const {data, status} = await axios.get(
        'http://localhost:8000', 
        { params: {searchTerm}}
    )  
    return data.results;
})*/

interface stateType {
    searchResults: any,
    isFetching: Boolean,
    error: any
}

const initialState: stateType = {
    searchResults: [],
    isFetching: false,
    error: null,
}


const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers: {
        searchStart: (state)=>{
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
            state.searchResults= null;
        },
    },
    /*extraReducers: (builder) => {
        builder.addCase(search.pending,  (state) => {
            state.isFetching = true;
            state.error = false;
        })
        builder.addCase(search.fulfilled, (state, action) => {
            state.isFetching = false;
            state.searchResults = action.payload;
            state.error = false;
        })
        builder.addCase(search.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        })
    }*/
});

export const { searchStart,searchSuccess,searchFailure} = searchSlice.actions;
export default searchSlice.reducer;