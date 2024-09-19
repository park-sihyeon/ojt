import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const ResumeListContainerCss = {
  wrapResumeListContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#eee',
    gap: `${rem(16)}`,
  }),
  addAndListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: `${rem(16)}`,
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
    fontSize: `${rem(16)}`,
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
