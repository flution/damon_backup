import { atom } from "recoil"

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
  }
})