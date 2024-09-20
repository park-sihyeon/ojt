import { style } from '@vanilla-extract/css';
import { theme } from '../../../resource/theme/theme.css';

export const homContentCss = {
  wrapHomeContent: style({
    display: 'flex',
    flexDirection: 'column',
    // gap: `${rem(16)}`,
    gap: theme.fontSize[16],
    // backgroundColor: theme.colors['blue'],
  }),
};
