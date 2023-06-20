import { useState, useEffect } from 'react';
import { MessagesData } from '../types/types';

export const useFetchData = (id: string, delay: number) => {
  const [data, setData] = useState<MessagesData[]>();
  const [firstTime, setFirstTime] = useState(false);
  const params = new FormData();
  params.append('actionName', 'MessagesLoad');

  const fetchData = async () => {
    fetch(`http://a0830433.xsph.ru/?messageId=${id}`, {
      method: 'POST',
      body: params,
    })
      .then((response) => response.json())
      .then((data) => setData(data.Messages))
      .catch((error) =>
        setTimeout(() => {
          console.log(error);
          fetchData();
        }, 5000)
      );
  };


  useEffect(() => {
    if(!firstTime){
        fetchData();
        setFirstTime(true);
    }
    setInterval(() => {
      fetchData();
    }, delay);
  }, []);
  return data;
};
