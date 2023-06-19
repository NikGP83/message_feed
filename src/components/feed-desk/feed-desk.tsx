import { useEffect, useState } from 'react';
import FeedItem from '../feed-item/feed-item';
import { MessagesData } from '../../types/types';

function FeedDesk() {
  const [data, setData] = useState<MessagesData[]>();
  const params = new FormData();
  params.append('actionName', 'MessagesLoad');

  const fetchData = async () => {
    fetch('http://a0830433.xsph.ru/?messageId=0', {
      method: 'POST',
      body: params,
    })
      .then((response) => response.json())
      .then((data) => setData(data.Messages));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <ul className='feed-desk'>
      {data.map((messageData) => (
        <FeedItem key={messageData.id} data={messageData} />
      ))}
    </ul>
  );
}

export default FeedDesk;
