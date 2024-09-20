import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../../../../resource/theme/theme.css';

const baseButtonCss = style({
  cursor: 'pointer',
});

export const coreButtonCss = {
  submitButton: styleVariants(
    (() => {
      return {
        default: [
          baseButtonCss,
          {
            background: theme.colors['blue-9'],
            border: 'none',
            color: theme.colors.white,
          },
        ],
        disabled: [
          baseButtonCss,
          {
            background: '#97BFF6',
            border: 'none',
            color: theme.colors.white,
            cursor: 'auto',
          },
        ],
      };
    })()
  ),
  registButton: styleVariants(
    (() => {
      return {
        default: [
          baseButtonCss,
          {
            background: theme.colors['blue-9'],
            border: 'none',
            color: theme.colors.white,
          },
        ],
        disabled: [
          baseButtonCss,
          {
            background: '#97BFF6',
            border: 'none',
            color: theme.colors.white,
            cursor: 'auto',
          },
        ],
      };
    })()
  ),
  deleteButton: styleVariants(
    (() => {
      return {
        default: [
          baseButtonCss,
          {
            background: theme.colors['blue-9'],
            border: 'none',
            color: theme.colors.white,
          },
        ],
        disabled: [
          baseButtonCss,
          {
            background: '#97BFF6',
            border: 'none',
            color: theme.colors.white,
            cursor: 'auto',
          },
        ],
      };
    })()
  ),
  cardButton: styleVariants(
    (() => {
      return {
        default: [
          baseButtonCss,
          {
            background: theme.colors['blue-9'],
            border: 'none',
            color: theme.colors.white,
          },
        ],
        disabled: [
          baseButtonCss,
          {
            background: '#97BFF6',
            border: 'none',
            color: theme.colors.white,
            cursor: 'auto',
          },
        ],
      };
    })()
  ),
};
