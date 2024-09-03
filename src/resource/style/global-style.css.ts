import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  padding: '0',
});

globalStyle('::-webkit-scrollbar', {
  width: '0px',
});

globalStyle('*', {
  fontFamily: 'Noto Sans KR !important',
});
