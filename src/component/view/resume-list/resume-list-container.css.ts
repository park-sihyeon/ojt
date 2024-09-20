import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';
import { theme } from '../../../resource/theme/theme.css';

export const ResumeListContainerCss = {
  wrapResumeListContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#eee',
    gap: theme.spacing[16],
  }),
  addAndListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing[16],
  }),
  listContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  line: style({
    width: '100%',
    borderBottom: '1px solid #ddd',
    margin: `${rem(16)} 0`,
  }),
  divider: style({
    width: '100%',
    height: `${rem(2)}`,
  }),
  subtitle: style({
    fontSize: theme.fontSize[16],
    fontWeight: '700',
    color: '#555',
    lineHeight: '1.7',
    letterSpacing: '1.3px',
  }),
};

globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
