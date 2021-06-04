import React from 'react';

function InfoBox() {
  return (
    <div className="infoBox">
      <span className="label">Kod satırı eklemek istiyorsanız</span>
      <span className="text">
        Örnek:
        <br />
        --kod--
        <br />
        <br /> --kod--
      </span>
    </div>
  );
}

export default InfoBox;
