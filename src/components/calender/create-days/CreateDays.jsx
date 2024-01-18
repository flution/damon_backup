import React, { useEffect, useState } from 'react'
import styles from './CreateDays.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { calendarInfoState } from '../../../states/calendar/calendarInfoState';

const CreateDays = ({ index }) => {

  const [calenderInfo, setCalenderInfo] = useRecoilState(calendarInfoState);
  const [date, setDate] = useState("");

  const getDate = () => {
    const date = new Date(calenderInfo.startDate);
    const calcDate = new Date(date.setDate(date.getDate() + index));
    // const date = new Date((calenderInfo.startDate).getDate() + index + 1);

    setDate(calcDate.toLocaleDateString());
  }

  useEffect(() => {
    getDate();
  }, [])


  return (
    <div className={styles.container}>
      <p>Day{index + 1}</p>
      {date}

    </div>
  )
}

export default CreateDays