import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { headerState } from '../../states/header/headerState';
import "react-datepicker/dist/react-datepicker.module.css"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerSettings, setHeaderSettings] = useRecoilState(headerState);
  const { showDefalut, showFeatures,showCreate } = headerSettings;
  const [isHovered, setIsHovered] = useState(false);

  // 페이지 이동을 위한 함수
  const navigateTo = (path) => () => {
    if(path === '/main') {
      setIsHovered(false);
    }
    navigate(path);
  };

    // 현재 경로에 따라 헤더 상태 업데이트
    useEffect(() => {
      if (location.pathname.includes('/register')) {
        if(location.pathname.includes('/step2')) {
          setHeaderSettings({ showDefalut: false, showFeatures: true, showCreate:true });
        } else {
          setHeaderSettings({ showDefalut: false, showFeatures: true, showCreate:false });
        }
      } else {
        setHeaderSettings({ showDefalut: true, showFeatures: false });
      }
    }, [location, setHeaderSettings]);

  return (
    <section className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header_logo} onClick={navigateTo('/main')}>
          DAMON
        </div>
        {showDefalut &&
          <div className={styles.header__content}>
            <nav className={styles.header__nav}>
              <ul className={styles.gnb}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <li className={styles.header__menu} onClick={navigateTo('/review')}>전체 리뷰</li>
                <li className={styles.header__menu} onClick={navigateTo('/community')}>커뮤니티</li>
                <li className={styles.header__menu2}>등록
                  <ul className={isHovered ? styles.subVisible : styles.sub}>
                    <li onClick={navigateTo('/register/review')}>리뷰 등록</li>
                    <li onClick={navigateTo('/register/calender')}>일정 등록</li>
                    <li onClick={navigateTo('/register/post')}>게시글 등록</li>
                  </ul>
                </li>
                <li className={styles.header__menu2}>마이룸
                  <ul className={isHovered ? styles.subVisible : styles.sub}>
                    <li onClick={navigateTo('/my/reviews')}>내 리뷰</li>
                    <li onClick={navigateTo('/my/calender')}>내 일정</li>
                    <li onClick={navigateTo('/my/community')}>내 커뮤니티</li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div onClick={navigateTo('/logout')} className={styles.header__logout}>로그아웃</div>
          </div>
        }
        {showFeatures &&
          <div className={styles.header__btns}>
            <button className={styles.cancel_btn} onClick={navigateTo('/main')}>취소</button>
            {showCreate && <button className={styles.confirm_btn}>등록</button>}
          </div>
        }

      </div>
      {showDefalut && <div className={isHovered ? styles.nav__backgroundVisible : styles.nav__background}></div>}
    </section>
  )
}

export default Header