import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function Input() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { msg, isAuthenticated, id } = useSelector(state => ({
    ...state.authReducer,
    ...state.errorReducer,
  }));
  const [error, setError] = useState();

  useEffect(() => {
    if (id === 'LOGIN_FAIL') {
      setError(msg.msg);
    }
    if (isAuthenticated) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg.msg, isAuthenticated, error]);

  const initialState = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialState);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
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
        type="email"
        placeholder="Eposta"
        className="inputbox"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Şifre"
        className="inputbox"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button type="submit" className="button">
        Giriş yap
      </button>
    </form>
  );
}

export default Input;
