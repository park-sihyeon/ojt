import { globalStyle, style } from '@vanilla-extract/css';

export const ResumeListContainerCss = {
  wrapResumeListContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#eee',
  }),
  listContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
  }),
  line: style({
    width: '100%',
    borderBottom: '1px solid #ddd',
    margin: '20px 0',
  }),
};

globalStyle('ul, li', {
  listStyle: 'none',
  listStyleType: 'none',
});
