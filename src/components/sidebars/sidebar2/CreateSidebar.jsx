import React, { useEffect, useState } from 'react'
import styles from './CreateSidebar.module.scss'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { calendarInfoState, computeDateState } from '../../../states/calendar/calendarInfoState';
import CreateDays from '../../calender/create-days/CreateDays';

const CreateSidebar = ({ setSearchPlace, places }) => {

  const setCalenderInfo = useSetRecoilState(calendarInfoState);
  const calenderInfo = useRecoilValue(calendarInfoState);
  const setComputeDate = useSetRecoilState(computeDateState);
  const computeDate = useRecoilValue(computeDateState);
  const clickedDay = useState(0);

  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPlace(inputText);
    setInputText("");
  };


  return (
    <div className={styles.container}>
      <section className={styles.selecDay}>
        <div className={styles.dayContainer}>
            {[...Array(parseInt(computeDate+1))].map((n, index) => {
              return <CreateDays key={index+1} index={index}/>
            })}
        </div>
      </section>
      <section className={styles.funcSide}>
        <div className={styles.addShow__btn}>
          <button>일정 추가</button> <p>/</p> <button>일정 보기</button>

        </div>
        <div>
          <form className="inputForm" onSubmit={handleSubmit}>
            <input
              placeholder="장소 검색"
              onChange={onChange}
              value={inputText}
            />
            {/* <button type="submit">검색</button> */}
          </form>
        </div>
        <div id="result-list">
          {places.map((item, i) => (
            <div key={i}>
              <div>
                <h5>{item.place_name}</h5>
                {item.road_address_name ? (
                  <div>
                    <p>{item.road_address_name}</p>
                    <p>{item.address_name}</p>
                  </div>
                ) : (
                  <p>{item.address_name}</p>
                )}
                <p>{item.phone}</p>
              </div>
            </div>
          ))}
          <div id="pagination"></div>
        </div>
      </section>
    </div>
  )
}

export default CreateSidebar