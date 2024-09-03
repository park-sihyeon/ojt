import { globalStyle, style } from '@vanilla-extract/css';

export const companyListContinerCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '30px',
    height: '300px',
    minHeight: '300px',
    overflow: 'scroll',
    marginBottom: '35px',
    flexDirection: 'column',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};
globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
