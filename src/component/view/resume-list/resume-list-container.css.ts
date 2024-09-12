import { globalStyle, style } from '@vanilla-extract/css';

export const ResumeListContainerCss = {
  wrapResumeListContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#eee',
    gap: '16px',
  }),
  addAndListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '16px',
  }),
  listContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  line: style({
    width: '100%',
    borderBottom: '1px solid #ddd',
    margin: '20px 0',
  }),
  divider: style({
    width: '100%',
    height: '2px',
  }),
  subtitle: style({
    fontSize: '16px',
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
