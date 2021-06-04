import React from 'react';
import '../../styles/register.scss';
import Input from './Input';

function Login() {
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
        <div href="#" className="link_box" style={{ backgroundColor: '#fff' }}>
          <h3 style={{ color: '#000' }}>
            <i className={`fab fa-google`}></i>
            Google ile devam et
          </h3>
        </div>
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
          <div className="line"></div> Kayıtlı hesabın varmı ? Giriş yap
          <div className="line"></div>
        </h4>
        <Input />
      </div>
    </>
  );
}

export default Login;
