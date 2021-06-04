import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authActions';
function Navbar({ searchProp, setSearchProp }) {
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));
  const dispatch = useDispatch();

  const userLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span>STACKOVER</span>
      </Link>
      <div
        className="inputBox"
        value={searchProp}
        onChange={e => setSearchProp(e.target.value)}
      >
        <i className="fas fa-search"></i>
        <input placeholder="Ara..."></input>
      </div>
      <div className="btns ">
        {user ? (
          <>
            <Link
              className="navButton navButton-green button-hover"
              onClick={userLogOut}
              to="/"
            >
              Çıkış yap
            </Link>
            <Link
              to="/profile"
              className="navButton navButton-white button-hover"
              type="button"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="navButton navButton-green button-hover"
            >
              Giris yap
            </Link>
            <Link
              to="/register"
              className="navButton navButton-white button-hover"
              type="button"
            >
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </div>
  );
}


export default Navbar;
