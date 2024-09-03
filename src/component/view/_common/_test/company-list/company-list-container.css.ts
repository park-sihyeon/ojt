import { globalStyle, style } from '@vanilla-extract/css';

export const companyListContinerCss = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  height: '300px',
  minHeight: '300px',
  // overflow: 'hidden',
  overflow: 'scroll',
  marginBottom: '35px',
});

globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
