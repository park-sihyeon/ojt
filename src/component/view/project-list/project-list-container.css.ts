import { globalStyle, style } from '@vanilla-extract/css';

export const projectListContinerCss = {
  wrapProjectList: style({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '10px',
    overflow: 'scroll',
    marginBottom: '35px',
    flexDirection: 'column',
    background: '#eee',
    position: 'relative',
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
  fontSize: '20px',
  fontWeight: 700,
});
globalStyle(`${projectListContinerCss.accordrion} .accordion-period`, {
  fontSize: '16px',
  fontWeight: 400,
  color: '#999',
});
