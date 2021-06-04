import React, { useContext, useState } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { createComments } from '../../api';
import { tokenConfig } from '../../actions/authActions';

function YourAnswer({ questionId }) {
  const { store } = useContext(ReactReduxContext);
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));

  const [msg, setMsg] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const token = store.getState().authReducer.token;
    const comment = { msg: msg };
    await createComments(questionId, comment, tokenConfig(token));
    window.location.reload();
  };

  return (
    <form className="your-answerArea" onSubmit={onSubmit}>
      <div className="topSection">
        <div>
          <span className="ownerName">Your Answer</span>
        </div>
      </div>
      <textarea
        className="input"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <br />
      {user ? (
        <button className="navButton-green" type="submit">
          Gönder
        </button>
      ) : (
        <h1>Yorum yapmak için giriş yapmalısınız</h1>
      )}
    </form>
  );
}
export default YourAnswer;
