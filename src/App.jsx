import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './pages/main/Main';
import RegisterCalender from './pages/calenders/register-calender/RegisterCalender';
import RegisterCalender2 from './pages/calenders/register-calender/RegisterCalender2';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Login />} /> */}

      <Route path='/' element={<Layout />}>
        <Route path='main' element={<Main />} />
        {/* <Route path='review/:id' element={<Review />} /> */}
        <Route path='register/calender' element={<RegisterCalender />} />
        <Route path='register/calender/step2' element={<RegisterCalender2 />} />

        {/* <Route path='view/myschedule' element={<MySchedule />} /> */}
      </Route>
    </Routes>
  );
}

export default App;