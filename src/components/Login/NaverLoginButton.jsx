import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.scss';
import naverLogo from '../../assets/naver_logo.png';

function NaverLoginButton() {
  // 네비게이션 함수 사용
  const navigate = useNavigate(); 

  // 네이버 로그인을 위한 URL 구성
  const CLIENT_ID = 'spdOdDxRE5b1jvsH5qAi'; // 네이버 클라이언트 ID 입력
  const REDIRECT_URI = 'http://localhost:8080/login/oauth2/code/naver'; // 실제 배포 시 변경 필요
  const STATE = 'RANDOM_STATE'; // 보안을 위한 상태 토큰, 실제로는 랜덤하게 생성
  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

  // 로그인 버튼 클릭 핸들러
  const handleLogin = () => {
    window.location.href = naverAuthUrl;
  };

  return (
    <button className="social-login-button naver-login-button" onClick={handleLogin}>
      <img src={naverLogo} alt="Naver logo" className="button-logo" />
      네이버로 시작하기
    </button>
  );
}

export default NaverLoginButton;