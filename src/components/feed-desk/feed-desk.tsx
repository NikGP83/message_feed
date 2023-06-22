import { useEffect, useState } from 'react';
import FeedItem from '../feed-item/feed-item';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFeedData } from '../../store/reducers/action-creators';
import Preloader from '../preloader/preloader';
import { motion } from 'framer-motion';
import { getNewId } from '../../utils/utils';
import './styles.css';
import { MessagesData } from '../../types/types';

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

  localStorage.setItem('test', '1');
  localStorage.setItem('test', '2');
  localStorage.setItem('test', '3');
  console.log(localStorage.getItem('test'));

  useEffect(() => {
    if (!isLoading) {
      setNewId(getNewId(data));
      setState([...state, ...data]);
    }
  }, [data]);

  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <ul className='feed-desk'>
      {data.map((messageData, i) => (
        <motion.li
          key={i}
          variants={listVariants}
          className='feed-item'
          initial='hidden'
          animate='visible'
          custom={i}
        >
          <FeedItem key={i} data={messageData} />
        </motion.li>
      ))}
    </ul>
  );
}

export default FeedDesk;
