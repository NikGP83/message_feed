import { MessagesData } from '../types/types';


export const getNewId = (data: MessagesData[]) => {
    if(typeof data === 'undefined'){
        throw new Error('Функция getNewId, нет данных');
    }
    return data[data.length - 1].id;
}