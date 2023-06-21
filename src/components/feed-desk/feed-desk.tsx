import { useEffect } from 'react';
import FeedItem from '../feed-item/feed-item';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFeedData } from '../../store/reducers/action-creators';
import Preloader from '../preloader/preloader';
import {motion} from 'framer-motion';
import './styles.css';

function FeedDesk() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.dataReducer);
  useEffect(() => {
    dispatch(fetchFeedData('0'));
  }, []);

  const listVariants = {
    visible: (i:number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      }
    }),
    hidden: {opacity: 0},
  }

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
