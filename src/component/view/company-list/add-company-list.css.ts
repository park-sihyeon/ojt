import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

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
    width: `${rem(30)}`,
    height: `${rem(30)}`,
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
  width: `${rem(15)}`,
  height: `${rem(3)}`,
  backgroundColor: '#999',
});

globalStyle(`${addCompanyListCss.addButton} .row`, {
  transform: 'translate(50%, -50%)',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: `${rem(3)}`,
  height: `${rem(15)}`,
  backgroundColor: '#999',
});

export const addCompanyModalCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'start',
    padding: `${rem(16)}`,
    flexDirection: 'column',
    height: '100%',
  }),
  formContainer: style({
    display: 'flex',
    gap: `${rem(32)}`,
    flexDirection: 'column',
    height: '100%',
  }),
  inputSection: style({
    display: 'flex',
    gap: `${rem(16)}`,
    flexDirection: 'column',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    gap: `${rem(16)}`,
  }),
  submitButton: style({
    width: '100%',
    padding: `${rem(16)}`,
    color: '#fff',
    background: '#ccc',
  }),
};
globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
