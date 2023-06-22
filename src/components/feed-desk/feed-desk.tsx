import { useEffect, useState } from 'react';
import FeedItem from '../feed-item/feed-item';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFeedData } from '../../store/reducers/action-creators';
import { motion } from 'framer-motion';
import { getNewId } from '../../utils/utils';
import { MessagesData } from '../../types/types';
import { framerMotionAnimateSettings } from '../../const/const';
import './styles.css';

function FeedDesk() {
  const dispatch = useAppDispatch();
  const [id, setNewId] = useState('');
  const [state, setState] = useState<MessagesData[]>([]);
  const { data, isLoading, isFirstTime } = useAppSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    if (isFirstTime) {
      dispatch(fetchFeedData('0'));
    }
    dispatch(fetchFeedData(id));
    const interval = setInterval(() => {
      dispatch(fetchFeedData(id));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    if (!isLoading) {
      setNewId(getNewId(data));
    }
  }, [isLoading, data]);



  if(typeof data === 'undefined') {
    return null;
  }

  return (
    <ul className='feed-desk'>
      {data.map((messageData, i) => (
        <motion.li
          key={i}
          variants={framerMotionAnimateSettings}
          initial='hidden'
          animate='visible'
          className='feed-item'
          custom={i}
        >
          <FeedItem key={i} data={messageData} />
        </motion.li>
      ))}
    </ul>
  );
}

export default FeedDesk;
