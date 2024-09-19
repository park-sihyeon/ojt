import { colors } from '../theme-implements';
import { spacing } from '../theme.interface';
import { ServiceTheme, theme } from '../theme.css';
import { createTheme } from '@vanilla-extract/css';

export const testLightTheme: ServiceTheme = {
  name: 'light',
  value: createTheme(theme, {
    colors: colors.light,
    fontSize: {
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
    },
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
    spacing,
  }),
};
