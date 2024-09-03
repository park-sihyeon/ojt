import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  backgroundColor: '#eee',
});
globalStyle('::-webkit-scrollbar', {
  width: '0px',
});

globalStyle('*', {
  fontFamily: 'Noto Sans KR !important',
});
