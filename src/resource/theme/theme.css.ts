// 여기다 색상, 폰트, 간격 요거 3가지만 일단 따라서 ㄱㄱ

import { createThemeContract } from '@vanilla-extract/css';
import { colorsContract, spacingContract } from './theme-contracts';
import { Theme } from '../../component/context/test-abstract-theme-context-provider';

export type ServiceThemeValue = string;
export type ServiceTheme = Theme<ServiceThemeValue>;

export const theme = createThemeContract({
  colors: colorsContract,
  spacing: spacingContract,
  fontSize: {
    11: null,
    12: null,
    14: null,
    16: null,
    18: null,
    20: null,
    24: null,
    28: null,
    32: null,
    36: null,
    40: null,
  },
  fontWeight: {
    400: null,
    500: null,
    700: null,
  },
});
