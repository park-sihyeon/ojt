import { colors } from '../theme-implements';
import { ServiceTheme, theme } from '../theme.css';
import { createTheme } from '@vanilla-extract/css';

const convert = {
  1: '0.0625rem',
  2: '0.125rem',
  3: '0.1875rem',
  4: '0.25rem',
  5: '0.3125rem',
  6: '0.375rem',
  7: '0.4375rem',
  8: '0.5rem',
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  26: '1.625rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  36: '2.25rem',
  38: '2.375rem',
  40: '2.5rem',
  42: '2.625rem',
  44: '2.75rem',
  46: '2.875rem',
  48: '3rem',
  50: '3.125rem',
};

export const testLightTheme: ServiceTheme = {
  name: 'light',
  value: createTheme(theme, {
    colors: colors.light,
    // fontSize: fontSizing,
    fontSize: convert,
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
    spacing: convert,
  }),
};
