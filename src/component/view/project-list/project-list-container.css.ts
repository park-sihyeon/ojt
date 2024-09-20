import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';
import { theme } from '../../../resource/theme/theme.css';

export const projectListContinerCss = {
  wrapProjectList: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[16],
    marginBottom: `${rem(35)}`,
    flexDirection: 'column',
    background: '#eee',
    position: 'relative',
    gap: theme.spacing[16],
  }),
  noneProjectList: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: `${rem(140)}`,
    backgroundColor: '#8A8D90 !important',
    fontWeight: '700',
    fontSize: theme.fontSize[16],
    letterSpacing: '1.2px',
    color: '#fff !important',
  }),
  dragAndDropSection: style({
    width: '100%',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  accordrion: style({
    padding: theme.spacing[16],
    position: 'relative',
  }),
  hamburger: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[5],
    position: 'absolute',
    top: `${rem(15)}`,
    right: `${rem(15)}`,
    gap: theme.spacing[5],
    width: `${rem(30)}`,
    height: `${rem(30)}`,
  }),
  absolute: style({
    position: 'absolute',
    top: '0',
    right: '0',
  }),
};
globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
globalStyle(`${projectListContinerCss.flex} > ul`, {
  width: '90%',
});
globalStyle(`${projectListContinerCss.hamburger} .line`, {
  width: '90%',
  background: '#999',
  height: '3px',
});
globalStyle(`${projectListContinerCss.accordrion} .column`, {
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
});
globalStyle(`${projectListContinerCss.accordrion} .accordion-title`, {
  fontSize: theme.fontSize[20],
  fontWeight: 700,
});
globalStyle(`${projectListContinerCss.accordrion} .accordion-period`, {
  fontSize: theme.fontSize[16],
  fontWeight: 400,
  color: '#999',
});
