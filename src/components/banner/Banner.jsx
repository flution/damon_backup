import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__item}>
        <div className={styles.left}>
          <div className={styles.titles}>
            <p className={styles.title}>
              "지도 위에서 하는 여행 계획"
              <br />
              더 이상 일정관리가 어렵지 않아요
            </p>
          </div>
          <p className={styles.subtitle}>
            친구와 여행 계획을 공유해 보세요
          </p>
        </div>
        <div className={styles.right}>
          <img src='banner/plane.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Banner