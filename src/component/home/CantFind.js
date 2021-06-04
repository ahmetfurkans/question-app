import React from 'react';
import Search from '../../styles/images/Search.svg';

function CantFind({ searchProp }) {
  return (
    <div>
      <img src={Search} alt="cantFind" />
      <h2>We We couldn't find anything for {searchProp}.</h2>
      <h3> Try different or less specific keywords.</h3>
    </div>
  );
}

export default CantFind;
