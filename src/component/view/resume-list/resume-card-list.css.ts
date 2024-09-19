import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const resumeCardListCss = {
  cardContainer: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    maxHeight: `${rem(140)}`,
    minHeight: `${rem(140)}`,
    borderRadius: `${rem(16)}`,
    borderColor: 'transparent',
    overflow: 'hidden',
    width: '95vw',
    marginBottom: `${rem(16)}`,
    position: 'relative',
  }),
  hamburger: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${rem(8)}`,
    position: 'absolute',
    top: '0',
    right: '0',
    gap: `${rem(8)}`,
    width: `${rem(30)}`,
    height: `${rem(30)}`,
  }),
};

globalStyle(`${resumeCardListCss.hamburger} .line`, {
  width: '90%',
  background: '#999',
  height: `${rem(3)}`,
});
