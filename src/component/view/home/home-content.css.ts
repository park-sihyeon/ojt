import { style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const homContentCss = {
  wrapHomeContent: style({
    display: 'flex',
    flexDirection: 'column',
    gap: `${rem(16)}`,
    // backgroundColor: theme.colors['blue'],
  }),
};
