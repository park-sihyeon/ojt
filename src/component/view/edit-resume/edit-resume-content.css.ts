import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const editResumeContentCss = {
  inputFormSection: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: '',
    flexDirection: 'column',
    // height: '100%',
    // position: 'relative',
    gap: `${rem(16)}`,
    padding: `${rem(16)}`,
  }),
  submitButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: `${rem(32)}`,
    height: `${rem(90)}`,
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: `${rem(20)}`,
    fontWeight: '700',
    border: 'none',
    zIndex: '100',
  }),
  column: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  row: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: `${rem(8)}`,
  }),
  goBack: style({}),
  divider: style({
    background: '#1976d2',
  }),
  infoTop: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
};

globalStyle(`${editResumeContentCss.inputFormSection} .title `, {
  fontSize: `${rem(22)}`,
  fontWeight: 700,
  color: '#1976d2',
});
globalStyle(`${editResumeContentCss.inputFormSection} .subtitle `, {
  fontSize: '18px',
  fontWeight: 700,
  color: '#555',
});
