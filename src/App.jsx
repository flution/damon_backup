import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login'
import Main from './pages/main/Main';
import Review from './pages/review/Review';
import RegisterCalendar from './pages/calendars/register-calendar/RegisterCalendar';
import KakaoRedirectHandler from './components/login/KakaoLoginRedirect'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login/oauth2/code/kakao' element={<KakaoRedirectHandler />} />

      <Route path='/' element={<Layout />}>
        <Route path='main' element={<Main />} />
        <Route path='review/:id' element={<Review />} />
        <Route path='register/calendar' element={<RegisterCalendar />} />
          
        {/* <Route path='view/myschedule' element={<MySchedule />} /> */}
      </Route>
    </Routes>
  );
}

export default App;


