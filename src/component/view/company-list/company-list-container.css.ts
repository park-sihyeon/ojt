import { globalStyle, style } from '@vanilla-extract/css';

export const companyListContinerCss = {
  wrapCompanyList: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    flexDirection: 'column',
    background: '#eee',
  }),
  dragAndDropSection: style({
    width: '100%',
  }),
  flex: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  ulContent: style({
    // padding: '0 16px',
  }),
  accordrion: style({
    padding: '20px 20px 20px',
    position: 'relative',
    minHeight: '40px',
  }),
  hamburger: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    position: 'absolute',
    top: '15px',
    right: '15px',
    gap: '5px',
    width: '30px',
    height: '30px',
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
  height: '3px',
});
globalStyle(`${companyListContinerCss.accordrion} .column`, {
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
});
globalStyle(`${companyListContinerCss.accordrion} .accordion-title`, {
  fontSize: '20px',
  fontWeight: 700,
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
globalStyle(`${companyListContinerCss.accordrion} .accordion-period`, {
  fontSize: '16px',
  fontWeight: 400,
  color: '#999',
});
