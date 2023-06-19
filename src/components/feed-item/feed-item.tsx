import React from 'react';

interface FeedItemProps {
  users_name: string;
  avatar: string;
  date: string;
  message: string;
  is_favorite: boolean;
  content_image: string;
  is_new: boolean;
  social_group: string;
}

function FeedItem({
  users_name,
  avatar,
  content_image,
  date,
  is_favorite,
  is_new,
  message,
  social_group,
}: FeedItemProps) {
  return (
    <>
      <li className='feed-item'>
        <div className='item-block'>
          <div className='head-wrapper'>
            <div className='users-block'>
              <div className='user-avatar'>
                <img src={avatar} alt='Фото профиля' />
              </div>
              <div className='name-block'>
                <div className='users-name'>{users_name}</div>
                {social_group && (
                  <div className='social-group-name'>{social_group}</div>
                )}
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
            <span className='time-text'>15:57</span>
          </div>
          <div className='content-block'>
            <div className='content-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              necessitatibus! Nesciunt exercitationem voluptates vero cumque
              inventore asperiores, minima architecto vitae iusto earum quo et
              atque modi autem magnam ea error.
              <button>Далее</button>
            </div>
            {content_image && <div className="content-image">
                <img src={content_image} alt="Картинка из сообщения" />
            </div>}
          </div>
          <div className="tags-block">
            <span className="new-tag">#Новое</span>
            <span className="expert-tag">#Эксперт</span>
          </div>
        </div>
      </li>
    </>
  );
}

export default FeedItem;
