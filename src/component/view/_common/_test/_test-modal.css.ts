import { style } from '@vanilla-extract/css';

export const testModalCss = {
  contanier: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    // minHeight: '',
    borderRadius: '15px',
    borderColor: 'transparent',
    overflow: 'scroll',
  }),
  openButton: style({
    width: '60px',
    height: '30px',
    background: ' #343',
  }),
  imFree: style({
    position: 'absolute',
    top: '0',
    left: '0',
  }),
};
