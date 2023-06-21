import { BASE_URL } from "../../const/const";
import { AppDispatch } from "../store";
import {fetchSlice} from "./fetch-slice";

const params = new FormData();
params.append('actionName', 'MessagesLoad');

export const fetchFeedData = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchSlice.actions.dataFetching());
        const response = await fetch(`${BASE_URL.url}?messageId=${id}`, {
            method: 'POST',
            body: params,
          })
        const responseData = await response.json();
        const messages = responseData.Messages;
        console.log(messages)
        dispatch(fetchSlice.actions.dataFetchingSuccess(messages)) 
    } catch (error) {
    }
}