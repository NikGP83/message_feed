import { useEffect } from 'react';
import FeedItem from '../feed-item/feed-item';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFeedData } from '../store/reducers/action-creators';
import Preloader from '../preloader/preloader';

function FeedDesk() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.dataReducer);
  // const [] = data;
  useEffect(() => {
    dispatch(fetchFeedData('0'));
  }, []);
  console.log(data);
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <ul className='feed-desk'>
      {data.map((messageData, i) => (
        <FeedItem key={i} data={messageData} />
      ))}
    </ul>
  );
}

export default FeedDesk;
