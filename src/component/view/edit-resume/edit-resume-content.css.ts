import { globalStyle, style } from '@vanilla-extract/css';

export const editResumeContentCss = {
  inputFormSection: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: '',
    flexDirection: 'column',
    // height: '100%',
    // position: 'relative',
    gap: '16px',
    padding: '20px',
  }),
  submitButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '30px',
    height: '90px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: '20px',
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
    gap: '10px',
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
  fontSize: '22px',
  fontWeight: 700,
  color: '#1976d2',
});
globalStyle(`${editResumeContentCss.inputFormSection} .subtitle `, {
  fontSize: '18px',
  fontWeight: 700,
  color: '#555',
});
