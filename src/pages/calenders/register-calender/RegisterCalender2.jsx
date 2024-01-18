import React, { useEffect, useState } from 'react'
import BeginSidebar from '../../../components/sidebars/sidebar1/BeginSidebar';
import CreateSidebar from '../../../components/sidebars/sidebar2/CreateSidebar';
import { headerState } from '../../../states/header/headerState';


const { kakao } = window;


const RegisterCalender2 = () => {

  const [searchPlace, setSearchPlace] = useState("");
  const [places, setPlaces] = useState([])

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const mapCotainer = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(mapCotainer, options);
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        // displayPagination(pagination)
        setPlaces(data)
      }
    }
    // // 검색결과 목록 하단에 페이지 번호 표시
    // function displayPagination(pagination) {
    //   var paginationEl = document.getElementById('pagination'),
    //     fragment = document.createDocumentFragment(),
    //     i

    //   // 기존에 추가된 페이지 번호 삭제
    //   while (paginationEl.hasChildNodes()) {
    //     paginationEl.removeChild(paginationEl.lastChild)
    //   }

    //   for (i = 1; i <= pagination.last; i++) {
    //     var el = document.createElement('a')
    //     el.href = '#'
    //     el.innerHTML = i

    //     if (i === pagination.current) {
    //       el.className = 'on'
    //     } else {
    //       el.onclick = (function (i) {
    //         return function () {
    //           pagination.gotoPage(i)
    //         }
    //       })(i)
    //     }

    //     fragment.appendChild(el)
    //   }
    //   paginationEl.appendChild(fragment)
    // }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:2px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace]);


  return (
    <div>
      <CreateSidebar setSearchPlace={setSearchPlace} places={places} />
      <div id="map" style={{
        // width: '1000px',
        height: '100vh'
      }}>
      </div>
    </div>
  )
}

export default RegisterCalender2