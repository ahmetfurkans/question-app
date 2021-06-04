import React from 'react';

function PersonalInformation() {
  return (
    <>
      <div className="header">
        <i className="fas fa-shield-alt"></i>
        <h2>Personel Information</h2>
      </div>
      <div className="inputs">
        <div className="names">
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="" id="firstName" />
          </div>
          <div className="secondName">
            <label htmlFor="lastName">LastName</label>
            <input type="text" name="" id="lastName" />
          </div>
        </div>
        <label htmlFor="position">Position</label>
        <input
          className="input"
          style={{ width: '100%' }}
          type="text"
          name=""
          id="position"
        />
        <label htmlFor="GitHub">GitHub link</label>
        <input className="input" type="text" name="" id="GitHub" />
        <label htmlFor="Twitter">Twitter link</label>
        <input className="input" type="text" name="" id="Twitter" />
        <label htmlFor="Linkedin">Linkedin link</label>
        <input className="input" type="text" name="" id="Linkedin" />
      </div>
      <div className="buttons">
        <button className="save-button">Save</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </>
  );
}

export default PersonalInformation;
