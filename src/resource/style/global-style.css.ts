import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  backgroundColor: '#eee',
});
globalStyle(
  `
  a:link,
  a:visited,
  a:hover,
  a:active
  `,
  {
    textDecoration: 'none',
  }
);
globalStyle('::-webkit-scrollbar', {
  width: '0px',
});

globalStyle('*', {
  fontFamily: 'Noto Sans KR !important',
});
