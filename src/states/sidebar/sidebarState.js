import { atom } from 'recoil';

export const activeSidebarState = atom({
  key: 'activeSidebarState', // 고유한 키
  default: 1, // 초기값은 1
});