import React, { useEffect, useState } from 'react'
import styles from './CreateDays.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { calendarInfoState, clickedDateState } from '../../../states/calendar/calendarInfoState';

const CreateDays = ({ index }) => {

  const [calenderInfo, setCalenderInfo] = useRecoilState(calendarInfoState);
  const [clickedDate, setClickedDate] = useRecoilState(clickedDateState);

  const [date, setDate] = useState("");

  const handleClickedDate = () => {
    setClickedDate(index + 1);
  }

  const getDate = () => {
    const date = new Date(calenderInfo.startDate);
    const calcDate = new Date(date.setDate(date.getDate() + index));

    setDate(calcDate.toLocaleDateString());
  }

  useEffect(() => {
    getDate();
  }, [calenderInfo.endDate])


  return (
    <div key={index + 1}
      onClick={handleClickedDate}
      className={`${styles.container} ${(index+1) == clickedDate ? styles.btnActive : ""}`}
    >
      <p>Day{index + 1}</p>
      {date}

    </div>
  )
}

export default CreateDays