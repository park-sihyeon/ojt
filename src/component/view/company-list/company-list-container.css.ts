import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const companyListContinerCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${rem(16)}`,
    flexDirection: 'column',
    background: '#eee',
    gap: `${rem(16)}`,
  }),
  noneProjectList: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: `${rem(140)}`,
    backgroundColor: '#8A8D90 !important',
    fontWeight: '700',
    fontSize: `${rem(16)}`,
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
  ulContent: style({}),
  accordrion: style({
    padding: `${rem(16)}`,
    position: 'relative',
    minHeight: `${rem(40)}`,
  }),
  hamburger: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${rem(5)}`,
    position: 'absolute',
    top: `${rem(16)}`,
    right: `${rem(16)}`,
    gap: `${rem(5)}`,
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
globalStyle(`${companyListContinerCss.flex} > ul`, {
  width: '90%',
});
globalStyle(`${companyListContinerCss.hamburger} .line`, {
  width: '90%',
  background: '#999',
  height: `${rem(3)}`,
});
globalStyle(`${companyListContinerCss.accordrion} .column`, {
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
});
globalStyle(`${companyListContinerCss.accordrion} .accordion-title`, {
  fontSize: `${rem(20)}`,
  fontWeight: 700,
  maxWidth: `${rem(200)}`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
globalStyle(`${companyListContinerCss.accordrion} .accordion-period`, {
  fontSize: `${rem(16)}`,
  fontWeight: 400,
  color: '#999',
});
