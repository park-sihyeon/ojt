import { Colors, PxToRem } from './theme.interface';

// px to rem 변환
export const baseSize = 16;

export const rem: PxToRem = (px: number) => {
  return `${px / baseSize}rem`;
};

const darkColors: Partial<Colors> = {};

const lightColors: Colors = {
  inherit: 'inherit',
  black: '#000000',
  white: '#FFFFFF',
  blue: '#F7F8F9',
  transparent: 'transparent',

  'gray-1': '#F7F8F9',
  'gray-2': '#F3F3F3',
  'gray-3': '#E8EBED',
  'gray-4': '#C9CDD2',
  'gray-5': '#9FA4AA',
  'gray-6': '#8A8D90',
  'gray-7': '#72787F',
  'gray-8': '#616569',
  'gray-9': '#464C53',
  'gray-10': '#383B3E',
  'gray-11': '#26282B',
  'gray-12': '#1A1B1E',

  'yellow-1': '#FFFCF6',
  'yellow-2': '#FEF6E7',
  'yellow-3': '#FFF4D1',
  'yellow-4': '#FFECB2',
  'yellow-5': '#FFE38F',
  'yellow-6': '#FFD75F',
  'yellow-7': '#FFCC33',
  'yellow-8': '#FFC004',
  'yellow-9': '#ECAA00',
  'yellow-10': '#C99100',
  'yellow-11': '#A07401',
  'yellow-12': '#6F5000',

  'orange-1': '#FFF4EA',
  'orange-2': '#FFEDDC',
  'orange-3': '#FFDFC2',
  'orange-4': '#FFCDA1',
  'orange-5': '#FFBA7C',
  'orange-6': '#FFA95E',
  'orange-7': '#F2994A',
  'orange-8': '#FF8A23',
  'orange-9': '#F47300',
  'orange-10': '#D64D00',
  'orange-11': '#A33B00',
  'orange-12': '#7B2C00',

  'red-1': '#FFF3F5',
  'red-2': '#FEE7E6',
  'red-3': '#FFDDDD',
  'red-4': '#FFD2D8',
  'red-5': '#FFB5BE',
  'red-6': '#FF9595',
  'red-7': '#FE7474',
  'red-8': '#EB5757',
  'red-9': '#F43636',
  'red-10': '#D62525',
  'red-11': '#B32424',
  'red-12': '#990505',

  'green-1': '#EEFDFA',
  'green-2': '#D7F3EE',
  'green-3': '#B7E3DA',
  'green-4': '#87DECB',
  'green-5': '#44D7B7',
  'green-6': '#18C8A2',
  'green-7': '#00AF89',
  'green-8': '#009776',
  'green-9': '#14866D',
  'green-10': '#00745A',
  'green-11': '#005C48',
  'green-12': '#004637',

  'blue-1': '#F2FBFE',
  'blue-2': '#ECF6FF',
  'blue-3': '#DCEEFF',
  'blue-4': '#C1E1FF',
  'blue-5': '#B0E3FF',
  'blue-6': '#8AD2FB',
  'blue-7': '#54B7EF',
  'blue-8': '#2D9CDB',
  'blue-9': '#2F80ED',
  'blue-10': '#276FDE',
  'blue-11': '#0654CD',
  'blue-12': '#0E4E97',
};

export const colors = {
  light: lightColors,
  dark: darkColors,
};

// seller 코드처럼 작성해보기
export interface Spacing {
  '0.0625rem': string;
  '0.125rem': string;
  '0.1875rem': string;
  '0.25rem': string;
  '0.3125rem': string;
  '0.375rem': string;
  '0.4375rem': string;
  '0.5rem': string;
  '0.625rem': string;
  '0.75rem': string;
  '0.875rem': string;
  '1rem': string;
  '1.125rem': string;
  '1.25rem': string;
  '1.375rem': string;
  '1.5rem': string;
  '1.625rem': string;
  '1.75rem': string;
  '1.875rem': string;
  '2rem': string;
  '2.125rem': string;
  '2.25rem': string;
  '2.375rem': string;
  '2.5rem': string;
  '2.625rem': string;
  '2.75rem': string;
  '2.875rem': string;
  '3rem': string;
  '3.125rem': string;
}

export interface FontSizing {
  // '1': string;
  // '2': string;
  // '3': string;
  // '4': string;
  // '5': string;
  // '6': string;
  // '7': string;
  // '8': string;
  // '10': string;
  // '12': string;
  // '14': string;
  // '16': string;
  // '18': string;
  // '20': string;
  // '22': string;
  // '24': string;
  // '26': string;
  // '28': string;
  // '30': string;
  // '32': string;
  // '34': string;
  // '36': string;
  // '38': string;
  // '40': string;
  // '42': string;
  // '44': string;
  // '46': string;
  // '48': string;
  // '50': string;
  '0.0625rem': string;
  '0.125rem': string;
  '0.1875rem': string;
  '0.25rem': string;
  '0.3125rem': string;
  '0.375rem': string;
  '0.4375rem': string;
  '0.5rem': string;
  '0.625rem': string;
  '0.75rem': string;
  '0.875rem': string;
  '1rem': string;
  '1.125rem': string;
  '1.25rem': string;
  '1.375rem': string;
  '1.5rem': string;
  '1.625rem': string;
  '1.75rem': string;
  '1.875rem': string;
  '2rem': string;
  '2.125rem': string;
  '2.25rem': string;
  '2.375rem': string;
  '2.5rem': string;
  '2.625rem': string;
  '2.75rem': string;
  '2.875rem': string;
  '3rem': string;
  '3.125rem': string;
  '3.5rem': string;
  '4rem': string;
  '4.5rem': string;
  '5rem': string;
}
