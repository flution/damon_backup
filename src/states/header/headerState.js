import React from 'react'
import { atom } from 'recoil'

export const headerState = atom({
  key: 'headerState', // 고유한 키
  default: {
    showDefalut: true,
    showFeatures: false,
    showCreate: false,
  },
});
