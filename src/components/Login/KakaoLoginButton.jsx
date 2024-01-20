import React from 'react';
import './LoginButton.scss';
import kakaoLogo from '../../assets/Kakao_Logo.png';

function KakaoLoginButton() {
  const REST_API_KEY = 'ab3a8af0dfdacf22fc47199199e5bb2f'; // 적절한 방식으로 관리
  const REDIRECT_URI = 'http://localhost:8080/login/oauth2/code/kakao'; // 적절한 방식으로 관리
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = link;
  };

  return (
    <button className="social-login-button kakao-login-button" onClick={handleLogin} >
      <img src={kakaoLogo} alt="Kakao logo" className="button-logo" />
      카카오로 시작하기
    </button>
  );
}

export default KakaoLoginButton;