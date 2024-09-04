import { globalStyle, style } from '@vanilla-extract/css';

export const addCompanyModalCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'start',
    padding: '10px',
    // height: '300px',
    // minHeight: '300px',
    overflow: 'scroll',
    marginBottom: '35px',
    flexDirection: 'column',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '15px',
  }),
  submitButton: style({
    width: '100%',
    padding: '20px',
    color: '#fff',
    background: '#ccc',
  }),
};
globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
