import { FontSizing, Spacing } from './theme-implements';
import { Colors } from './theme.interface';

export const colorsContract: {
  [key in keyof Colors]: null;
} = {
  inherit: null,
  black: null,
  white: null,
  blue: null,
  transparent: null,

  'gray-1': null,
  'gray-2': null,
  'gray-3': null,
  'gray-4': null,
  'gray-5': null,
  'gray-6': null,
  'gray-7': null,
  'gray-8': null,
  'gray-9': null,
  'gray-10': null,
  'gray-11': null,
  'gray-12': null,

  'yellow-1': null,
  'yellow-2': null,
  'yellow-3': null,
  'yellow-4': null,
  'yellow-5': null,
  'yellow-6': null,
  'yellow-7': null,
  'yellow-8': null,
  'yellow-9': null,
  'yellow-10': null,
  'yellow-11': null,
  'yellow-12': null,

  'orange-1': null,
  'orange-2': null,
  'orange-3': null,
  'orange-4': null,
  'orange-5': null,
  'orange-6': null,
  'orange-7': null,
  'orange-8': null,
  'orange-9': null,
  'orange-10': null,
  'orange-11': null,
  'orange-12': null,

  'red-1': null,
  'red-2': null,
  'red-3': null,
  'red-4': null,
  'red-5': null,
  'red-6': null,
  'red-7': null,
  'red-8': null,
  'red-9': null,
  'red-10': null,
  'red-11': null,
  'red-12': null,

  'green-1': null,
  'green-2': null,
  'green-3': null,
  'green-4': null,
  'green-5': null,
  'green-6': null,
  'green-7': null,
  'green-8': null,
  'green-9': null,
  'green-10': null,
  'green-11': null,
  'green-12': null,

  'blue-1': null,
  'blue-2': null,
  'blue-3': null,
  'blue-4': null,
  'blue-5': null,
  'blue-6': null,
  'blue-7': null,
  'blue-8': null,
  'blue-9': null,
  'blue-10': null,
  'blue-11': null,
  'blue-12': null,
};

// 여기서 아예 rem 치환 처리 해버리기 ㄱ
// 요건 연습용으로 seller에 있는 코드로 익혀보자 요런 생각도 중요!
export const spacingArray = new Array(10).fill(null).map((_, idx) => {
  const num = (Number(idx) + 1) * 8;
  return `${num}`;
}) as (keyof Spacing)[];

export const spacingContract = spacingArray.reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: null,
  };
}, {}) as {
  [space in keyof Spacing]: null;
};

// fontsize 도 위와같이 처리 해보자
export const fontSizeArray = new Array(25).fill(null).map((_, idx) => {
  const num = (Number(idx) + 1) * 2;
  return `${num}`;
}) as (keyof FontSizing)[];

const addFontSizingArray = ['1', '3', '5', '7', ...fontSizeArray];
export const fontSizeContract = addFontSizingArray.reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: null,
  };
}, {}) as {
  [size in keyof FontSizing]: null;
};
