import { style } from '@vanilla-extract/css';

export const inputFormCss = {
  wrapInputFormCss: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: '',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    gap: '10px',
    padding: '20px',
  }),
  submitButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // padding: '30px',
    height: '90px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: '20px',
    fontWeight: '700',
    border: 'none',
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
  height100: style({
    height: '100%',
  }),
  maginTop: style({
    marginTop: '20px',
  }),
  goBack: style({
    position: 'absolute',
    top: '0',
    right: '0',
  }),
};

// globalStyle('', {
// });
