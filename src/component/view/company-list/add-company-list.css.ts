import { globalStyle, style } from '@vanilla-extract/css';

export const addCompanyListCss = {
  addCompanyListWrap: style({
    width: '100%',
  }),
  buttonSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  addButton: style({
    width: '30px',
    height: '30px',
    border: '3px solid #999',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }),
  boxContainer: style({
    width: '100%',
  }),
};

globalStyle(`${addCompanyListCss.addButton} .column`, {
  transform: 'translate(50%, -50%)',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: '15px',
  height: '3px',
  backgroundColor: '#999',
});

globalStyle(`${addCompanyListCss.addButton} .row`, {
  transform: 'translate(50%, -50%)',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: '3px',
  height: '15px',
  backgroundColor: '#999',
});

export const addCompanyModalCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'start',
    padding: '16px',
    flexDirection: 'column',
    height: '100%',
  }),
  formContainer: style({
    display: 'flex',
    gap: '32px',
    flexDirection: 'column',
    height: '100%',
  }),
  inputSection: style({
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
