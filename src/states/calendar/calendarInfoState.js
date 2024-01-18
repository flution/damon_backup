import { atom, selector } from "recoil"
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const calendarInfoState = atom({
  key: "calendarInfo",
  default: {
    title: "",
    startDate: "",
    endDate: "",
    area: "",
    travels: [
      {
        locationName: "",
        latitude: "",
        longitude: 0,
        orderNum: 0,
        memo: "",
      }
    ]
  },
  effects_UNSTABLE: [persistAtom],
})


export const computeDateState = selector({
  key: "computeDate",
  get: ({ get }) => {
    const calendarInfo = get(calendarInfoState);
    let startDate = calendarInfo.startDate;
    let endDate = calendarInfo.endDate;

    // startDate와 endDate가 문자열이라면 Date 객체로 변환
    if (typeof startDate === 'string') {
      startDate = new Date(startDate);
    }
    if (typeof endDate === 'string') {
      endDate = new Date(endDate);
    }

    // startDate와 endDate가 유효한 Date 객체인지 확인
    if (startDate instanceof Date && endDate instanceof Date && 
        !isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      let elapsedMSec = endDate.getTime() - startDate.getTime();
      const elapsedDay = Math.ceil(elapsedMSec / (1000 * 60 * 60 * 24));
      return elapsedDay;
    }

    return 0; // 유효하지 않은 경우, 0을 반환
  },
  effects_UNSTABLE: [persistAtom],
});

// export const clickedDate = atom({
//   key: "clickedDate",
//   default: [],
//   effects_UNSTABLE: [persistAtom],
// })