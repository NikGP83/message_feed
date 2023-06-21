import { MessagesData } from "../../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FetchData {
    data: MessagesData[]
    isLoading: boolean;
    error: string;
    isFavorite: string;
}


const initialState:FetchData = {
    data: [],
    isLoading: true,
    error: '',
    isFavorite: '',
}

export const fetchSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true;
        },
        dataFetchingSuccess(state, action: PayloadAction<MessagesData[]>){
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        dataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }

})

export const {dataFetching, dataFetchingError, dataFetchingSuccess} = fetchSlice.actions;
export default fetchSlice.reducer;