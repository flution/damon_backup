import React, { useEffect, useState } from 'react'
import BeginSidebar from '../../../components/sidebars/sidebar1/BeginSidebar';
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import CreateSidebar from '../../../components/sidebars/sidebar2/CreateSidebar';
import { useRecoilState } from 'recoil';
import { activeSidebarState } from '../../../states/sidebar/sidebarState';
import { headerState } from '../../../states/header/headerState';


const { kakao } = window;

const regions = [
  { value: '가평', label: "가평" },
  { value: '강원', label: "강원" },
  { value: '경기/인천', label: "경기/인천" },
  { value: '서울', label: "서울" },
  { value: '충청', label: "충청" },
  { value: '경상', label: "경상" },
  { value: '전라', label: "전라" },
  { value: '제주', label: "제주" },
];

const RegisterCalender = () => {

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [numberDay, setNumberDay] = useState(0);

  const [headerSettings, setHeaderSettings] = useRecoilState(headerState);
  const { showDefalut, showFeatures,showCreate } = headerSettings;

  const switchSidebar = () => {
    setHeaderSettings({ showDefalut: false, showFeatures: true, showCreate: true });

  };


  useEffect(() => {
    const mapCotainer = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(mapCotainer, options);
  }, []);

  const handleDay = () => {
    let elapsedMSec = endDate.getTime() - startDate.getTime(); // 172800000
    const elapsedDay = (elapsedMSec / 1000 / 60 / 60 / 24) + 1;
    setNumberDay(elapsedDay);
  }

  return (
    <div>
      {!showCreate ? <BeginSidebar onSwitch={switchSidebar} /> : <CreateSidebar />}
      <div id="map" style={{
        // width: '1000px',
        height: '100vh'
      }}>
      </div>
    </div>
  )
}

export default RegisterCalender