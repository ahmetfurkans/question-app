import React from 'react';
import loading from '../styles/images/Circle-Loading.svg';

function Loading() {
  return (
    <div>
      <img src={loading} alt="loading" className="loading-gif" />
    </div>
  );
}

export default Loading;
