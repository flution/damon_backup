import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className={styles.header}>
      <div className={styles.header__container}>
        <Link to="main" className={styles.header_logo}>
          {/* <img style={{width:"160px"}} src='banner/DAMON.png'/> */}
          DAMON
        </Link>
        <div className={styles.header__content}>
          <nav className={styles.header__nav}>
            <ul className={styles.gnb}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <li className={styles.header__menu}><Link href=''>전체 리뷰</Link>
                <ul className={isHovered ? styles.subVisible : styles.sub}>
                </ul>
              </li>
              <li className={styles.header__menu}><Link href=''>커뮤니티</Link>
                <ul className={isHovered ? styles.subVisible : styles.sub}>
                </ul>
              </li>
              <li className={styles.header__menu2}>등록
                <ul className={isHovered ? styles.subVisible : styles.sub}>
                  <li><Link>리뷰 등록</Link></li>
                  <li><Link to="register/schedule">일정 등록</Link></li>
                  <li><Link>게시글 등록</Link></li>
                </ul>
              </li>
              <li className={styles.header__menu2}>마이룸
                <ul className={isHovered ? styles.subVisible : styles.sub}>
                  <li><Link>내 리뷰</Link></li>
                  <li><Link>내 일정</Link></li>
                  <li><Link>커뮤니티</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div>
            <a className={styles.header__logout}>로그아웃</a>
          </div>
        </div>
      </div>
      <div className={isHovered ? styles.nav__backgroundVisible : styles.nav__background}>
      </div>
    </section>
  )
}

export default Header