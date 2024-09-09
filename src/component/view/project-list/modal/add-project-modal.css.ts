import { globalStyle, style } from '@vanilla-extract/css';

export const addProjectModalCss = {
  wrapProjectList: style({
    display: 'flex',
    justifyContent: 'start',
    padding: '16px',
    // height: '300px',
    // minHeight: '300px',
    overflow: 'scroll',
    marginBottom: '35px',
    flexDirection: 'column',
  }),
  formSection: style({
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '16px',
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
