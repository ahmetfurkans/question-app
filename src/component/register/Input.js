import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/authActions';

function Input() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { msg, isAuthenticated, id } = useSelector(state => ({
    ...state.authReducer,
    ...state.errorReducer,
  }));

  const [error, setError] = useState();

  useEffect(() => {
    if (id === 'REGISTER_FAIL') {
      setError(msg.msg);
    }
    if (isAuthenticated) {
      history.push('/');
    }
  }, [msg.msg, isAuthenticated, error, id, history]);

  const initialState = {
    username: '',
    email: '',
    password: '',
  };
  const [user, setUser] = useState(initialState);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register(user));
  };

  return (
    <form className="input" onSubmit={onSubmit}>
      {error ? (
        <>
          <h1 className="bg-warning">{error}</h1>
          <br />
        </>
      ) : null}
      <input
        minLength={6}
        maxLength={16}
        type="text"
        placeholder="Kullanıcı adı"
        className="inputbox"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Eposta"
        className="inputbox"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <input
        minLength={8}
        maxLength={16}
        type="password"
        placeholder="Şifre"
        className="inputbox"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button type="submit" className="button">
        Kayıt ol
      </button>
    </form>
  );
}

export default Input;
