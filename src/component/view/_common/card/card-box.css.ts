import { globalStyle, style } from '@vanilla-extract/css';

export const cardBoxCss = {
  // container: style({
  //   padding: '30px',
  //   height: '600px',
  //   minHeight: '600px',
  //   borderRadius: '15px',
  //   overflow: 'hidden',
  // }),
  cardContainer: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    maxHeight: '140px',
    minHeight: '140px',
    borderRadius: '15px',
    borderColor: 'transparent',
    overflow: 'hidden',
    width: '95vw',
    marginBottom: '15px',
    position: 'relative',
  }),
  hamburger: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    position: 'absolute',
    top: '0',
    right: '0',
    gap: '5px',
    width: '30px',
    height: '30px',
  }),
};

globalStyle(`${cardBoxCss.hamburger} .line`, {
  width: '90%',
  background: '#999',
  height: '3px',
});
