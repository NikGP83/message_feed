import { MessagesData } from '../../types/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FetchData {
    data: MessagesData[]
    isLoading: boolean;
    error: string;
    isFavorite: string;
    isFirstTime: boolean;
}


const initialState:FetchData = {
    data: [],
    isLoading: true,
    error: '',
    isFavorite: '',
    isFirstTime: true,
}

export const fetchSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true;
        },
        firstRequestData(state) {
            state.isFirstTime = false;
        },
        dataFetchingSuccess(state, action: PayloadAction<MessagesData[]>){
            state.isLoading = false;
            state.error = '';
            state.data = [ ...state.data, ...action.payload];
        },
        dataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const {dataFetching, dataFetchingError, dataFetchingSuccess, firstRequestData} = fetchSlice.actions;
export default fetchSlice.reducer;