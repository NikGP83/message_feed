import FeedItem from '../feed-item/feed-item';
import { useFetchData } from '../../hooks/useFetchData';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function FeedDesk() {
  const data = useFetchData(10000);
  console.log(data);
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <TransitionGroup className='feed-desk' component='ul'>
      {data.map((messageData, i) => (
        <CSSTransition key={i} in={true} timeout={4300} className='feed-item' unmountOnExit>
          <FeedItem data={messageData} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default FeedDesk;
