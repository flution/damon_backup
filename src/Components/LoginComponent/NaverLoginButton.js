import React from 'react';
import '../../styles/LoginButton.css'; // 위에서 작성한 CSS를 import
import naverLogo from '../../assets/naver_logo.png';

function NaverLoginButton() {
  // 로그인 로직을 여기에 추가할 수 있습니다.
  const handleLogin = () => {
    console.log('네이버 로그인 로직을 구현하세요.');
  };

  return (
    <button className="social-login-button naver-login-button">
      <img src={naverLogo} alt="Logo" className="button-logo" />
      네이버로 시작하기
    </button>
  );
}

export default NaverLoginButton;