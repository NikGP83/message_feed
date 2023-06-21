import { useState, useEffect } from 'react';
import { MessagesData } from '../types/types';

export const useFetchData = (delay: number): MessagesData[] => {
  const [feedData, setFeedData] = useState<MessagesData[]>([]);
  const [firstTime, setFirstTime] = useState(true);
  const [id, setNewId] = useState('0');
  const params = new FormData();
  params.append('actionName', 'MessagesLoad');

  const getNewId = (arr: MessagesData[]) => {
    console.log(firstTime)
    if (firstTime) {
      return '0';
    } else {
      setNewId(arr[arr.length - 1].id.toString());
    }
  };

  const fetchData = async () => {
    fetch(`http://a0830433.xsph.ru/?messageId=${id}`, {
      method: 'POST',
      body: params,
    })
      .then((response) => response.json())
      .then((data) => setFeedData([...feedData, ...data.Messages]))
      .catch((error) =>
        setTimeout(() => {
          console.log(error);
          fetchData();
        }, 5000)
      );
  };

  useEffect(() => {
    if (firstTime) {
      fetchData();
      setFirstTime(false);
    } else {
      getNewId(feedData);
    }
    setInterval(() => {
      fetchData();
    }, delay);
  }, [feedData]);


  return feedData;
};
