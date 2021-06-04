import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ProfileCard() {
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));
  const [auth, setAuth] = useState('');
  useEffect(() => {
    if (user) {
      setAuth(user.username);
    }
  }, [user]);

  return (
    <div className="profile-card">
      <img
        src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profil"
      />
      <div className="content">
        <h1>Ahmet Furkan Sevim</h1>
        <h2>Front-end Developer</h2>
        <h3>{auth}</h3>
        <div className="links">
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook-square"></i>
        </div>

        <button className="button">Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard;
