import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Loginpage.scss';
import { useNavigate } from 'react-router-dom';
import NaverLoginButton from '../../components/login/NaverLoginButton';
import KakaoLoginButton from '../../components/login/KakaoLoginButton';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인증 코드를 확인합니다.
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      // 여기에서 백엔드로 직접 인증 코드를 보내는 대신,
      // 백엔드가 이미 인증을 처리하고 JWT 토큰을 포함하여 리다이렉트했을 것으로 가정합니다.
      // 따라서, 이 부분은 삭제하거나 주석 처리합니다.
      // axios.post('/api/auth/social-login', { code })...

      // 대신, JWT 토큰을 확인하고 로컬 스토리지에 저장한 후 메인 페이지로 리다이렉트합니다.
      const token = new URL(window.location.href).searchParams.get('token');
      if (token) {
        localStorage.setItem('token', token);
        navigate('/main');
      }
    }
  }, [navigate]);

  return (
    <div className="login-page">
      <header className="header">
        <h1>DAMON</h1>
        <p>지금 사용하는 아이디로<br /> 다른 서비스에 가입하실 수 있습니다.</p>
      </header>
      <div className="Social-login">
        <KakaoLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
}

export default Login;

