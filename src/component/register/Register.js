import React from 'react';
import Input from './Input';
import GoogleLogin from 'react-google-login';
import '../../styles/register.scss';

function Register() {
  const responseGoogle = response => {};
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container-form">
        <div className="title">
          <h2>Stackover'a Hoşgeldiniz</h2>
          <h3>
            <span>Stackover</span> 33.807 muhteşem yazılımcıdan oluşan bir
            topluluk
          </h3>
        </div>
        <GoogleLogin
          clientId="630070956086-9ebj8217jn6jmli9q2nuhvsoob0limpc.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="link_box"
          buttonText="Google ile devam et"
        />
        <div href="#" className="link_box" style={{ backgroundColor: '#000' }}>
          <h3 style={{ color: '#fff' }}>
            <i className={`fab fa-github`}></i>
            GitHub ile devam et
          </h3>
        </div>
        <div
          href="#"
          className="link_box"
          style={{ backgroundColor: '#1da1f2' }}
        >
          <h3 style={{ color: '000' }}>
            <i className={`fab fa-twitter`}></i>
            Twitter ile devam et
          </h3>
        </div>

        <h4 className="register-style">
          <div className="line"></div> Kayıtlı hesabın yokmu ? Kayıt ol
          <div className="line"></div>
        </h4>
        <Input />
      </div>
    </>
  );
}

export default Register;
