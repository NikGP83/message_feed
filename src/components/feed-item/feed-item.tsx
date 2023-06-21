import { controls_buttons_name } from '../../const/const';
import { MessagesData } from '../../types/types';
import IconsBlock from '../icons-block/icons-block';
import './styles.css';

interface FeedItemProps {
  data: MessagesData;
}

function FeedItem({ data }: FeedItemProps) {
  const {
    attachments,
    author,
    content,
    date,
  } = data;

  const [mediaData] = attachments || [];

  const is_new_message = true;


  return (
    <>
      <li className='feed-item'>
        <div className='item-block'>
          <div className='head-wrapper'>
            <div className='users-block'>
              <div className='user-avatar'>
                <img
                  src='../../img/default_avatar.png'
                  alt='Фото профиля'
                  width='36'
                  height='36'
                />
              </div>
              <div className='name-block'>
                <span className='user-name'>{author}</span>
              </div>
            </div>
            <div className='control-block'>
              <div className='control-btns-wrapper'>
                <button className='control-button'>
                  <span className='control-text'>{controls_buttons_name.button_left}</span>
                </button>
                <button className='control-button'>
                  <span className='control-text'>{controls_buttons_name.button_center}</span>
                </button>
                <button className='control-button'>
                  <span className='control-text'>{controls_buttons_name.button_right}</span>
                </button>
              </div>
                <IconsBlock />
            </div>
          </div>

          <div className='content-block'>
            <div className='time-block'>
              <span className='time-text'>
                {new Date(date).getHours() + ':' + new Date(date).getMinutes()}
              </span>
            </div>
            <div className='content-wrapper'>
              <div className='content-text'>{content}</div>
              <button className='content-btn'>Далее</button>
              {mediaData && mediaData.type === 'image' ? (
                <div className='content-image-block'>
                  <img
                    src={mediaData.url}
                    alt='Картинка из сообщения'
                    min-width='300'
                    height='259'
                    className='content-image'
                  />
                </div>
              ) : null}
              {mediaData && mediaData.type === 'video' ? (
                <div className='content-image'>
                  <video
                    src={mediaData.url}
                    min-width='300'
                    height='259'
                    controls
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className='tags-block'>
            <span className={`tags ${is_new_message && `active-tag`}`}>
              #Новое
            </span>
            <span className='tags'>#Эксперт</span>
          </div>
        </div>
      </li>
    </>
  );
}

export default FeedItem;
