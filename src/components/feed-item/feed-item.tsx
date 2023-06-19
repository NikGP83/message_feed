import { MessagesData } from '../../types/types';

interface FeedItemProps {
  data: MessagesData;
}

function FeedItem({data}: FeedItemProps) {
  const {attachments, author, channel, content, date, region, id, senderNumber} = data;

  return (
    <>
      <li className='feed-item'>
        <div className='item-block'>
          <div className='head-wrapper'>
            <div className='users-block'>
              <div className='user-avatar'>
                <img src='#' alt='Фото профиля' />
              </div>
              <div className='name-block'>
                <div className='users-name'>{author}</div>
                {channel && <div className='social-group-name'>{channel}</div>}
              </div>
            </div>
            <div className='control-block'>
              <button>Левый</button>
              <button>Центр</button>
              <button>Правый</button>
            </div>
            <div className='icon-block'>
              <img src='#' alt='Отправить сообщение' />
              <img src='#' alt='Скрыть сообщение' />
              <img src='#' alt='Параметры' />
              <img src='#' alt='Избранное' />
            </div>
          </div>
          <div className='time-clock'>
            <span className='time-text'>14:14</span>
          </div>
          <div className='content-block'>
            <div className='content-text'>
              {content}
              <button>Далее</button>
            </div>
            {attachments && (
              <div className='content-image'>
                <img src='#' alt='Картинка из сообщения' />
              </div>
            )}
          </div>
          <div className='tags-block'>
            <span className='new-tag'>#Новое</span>
            <span className='expert-tag'>#Эксперт</span>
          </div>
        </div>
      </li>
    </>
  );
}

export default FeedItem;
