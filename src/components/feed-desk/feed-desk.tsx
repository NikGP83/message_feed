import { useEffect } from 'react';
import FeedItem from '../feed-item/feed-item';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFeedData } from '../../store/reducers/action-creators';
import Preloader from '../preloader/preloader';
import './styles.css';

function FeedDesk() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.dataReducer);
  useEffect(() => {
    dispatch(fetchFeedData('0'));
  }, []);

  if (isLoading) {
    return <Preloader />;
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
