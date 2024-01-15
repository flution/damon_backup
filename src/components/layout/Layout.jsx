import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
// import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout