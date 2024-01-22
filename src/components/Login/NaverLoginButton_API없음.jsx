import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.scss';
import naverLogo from '../../assets/naver_logo.png';

function NaverLoginButton() {
  const navigate = useNavigate(); // 네비게이션 함수 사용
  // 네이버 로그인을 위한 URL 구성
  const CLIENT_ID = 'spdOdDxRE5b1jvsH5qAi';
  const REDIRECT_URI = 'http://localhost:8080/login/oauth2/code/naver';
  const STATE = 'RANDOM_STATE';
  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

  // 로그인 버튼 클릭 핸들러
  const handleLogin = () => {
    window.location.href = naverAuthUrl;
  };

  // 컴포넌트 마운트 시 인증 코드 확인 및 처리
  useEffect(() => {
    // URL에서 인증 코드(code) 추출
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      // 백엔드 서버로 인증 코드 전송
      axios.post('http://localhost:8080/api/auth/naver', { code })
        .then(response => {
          // 백엔드로부터 받은 데이터 처리
          // 예: 로컬 스토리지에 액세스 토큰 저장, 사용자 정보 저장 등
          localStorage.setItem('access_token', response.data.access_token);
          
          // 로그인 성공 후 메인 페이지로 리다이렉트
          navigate('/main');
        })
        .catch(error => {
          console.error('로그인 에러', error);
          // 에러 처리 로직
          // 예: 사용자에게 에러 메시지를 보여주기
        });
    }
  }, []);

  return (
    <button className="social-login-button naver-login-button" onClick={handleLogin}>
      <img src={naverLogo} alt="Naver logo" className="button-logo" />
      네이버로 시작하기
    </button>
  );
}

export default NaverLoginButton;