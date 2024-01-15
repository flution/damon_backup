import React from 'react';
import '../../styles/LoginButton.css'; // 위에서 작성한 CSS 파일 import
import kakaoLogo from '../../assets/kakao_Logo_black.png';

function KakaoLoginButton() {
  // 로그인 로직을 여기에 추가할 수 있습니다.
  const handleLogin = () => {
    console.log('카카오 로그인 로직을 구현하세요.');
  };

  return (
    <button className="social-login-button kakao-login-button">
      <img src={kakaoLogo} alt="Logo" className="button-logo" />
      카카오로 시작하기
    </button>
  );
}

export default KakaoLoginButton;