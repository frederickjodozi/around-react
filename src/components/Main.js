import React from "react";
import api from '../utils/api.js';
import editButtonSign from '../images/profile__edit-button-sign.svg';

function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick}) {
  // User data State and Effects //
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  }, []) 

  return(
    <main>
      <section className="profile page__wrapper">
        <button className="profile__avatar" type="button" style={{backgroundImage: `url(${userAvatar})`}} onClick={onEditAvatarClick} aria-label="edit-avatar">
          <img className="profile__avatar-button" src={editButtonSign} alt="edit-avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfileClick} aria-label="edit-profile"></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick} aria-label="add-profile"></button>
      </section>
      <section className="places page__wrapper">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
