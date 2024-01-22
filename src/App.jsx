import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Layout from './components/layout/Layout';
import Main from './pages/main/Main';
import Review from './pages/review/review';
import RegisterCalendar from './pages/calendars/register-calendar/RegisterCalendar';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='review/:id' element={<Review />} />
        <Route path='register/calender' element={<RegisterCalendar />} />
          
        {/* <Route path='view/myschedule' element={<MySchedule />} /> */}

      </Route>
    </Routes>
  );
}

export default App;


