import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthResult = async () => {
      try {
        // 백엔드 서버에 인가 코드를 전달하고 JWT 토큰을 요청
        const code = new URLSearchParams(window.location.search).get('code');
        const response = await axios.get(`http://localhost:8080/login/oauth2/code/kakao?code=${code}`);
        // 성공 처리 로직
        localStorage.setItem('token', response.data.token);
        navigate('/main');
      } catch (error) {
        // 에러 처리 로직
        console.error('로그인 처리 중 에러 발생', error);
        navigate('/');
      }
    };

    fetchAuthResult();
  }, [navigate]);

  return <div>카카오 로그인 처리 중...</div>;
}

export default KakaoRedirectHandler;

