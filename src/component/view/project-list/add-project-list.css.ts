import { globalStyle, style } from '@vanilla-extract/css';

export const addProjectListCss = {
  wrapAddResumeContent: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  addButton: style({
    width: '30px',
    height: '30px',
    border: '3px solid #999',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }),
};

globalStyle(`${addProjectListCss.addButton} .column`, {
  transform: 'translate(50%, -50%)',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: '15px',
  height: '3px',
  backgroundColor: '#999',
});

globalStyle(`${addProjectListCss.addButton} .row`, {
  transform: 'translate(50%, -50%)',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: '3px',
  height: '15px',
  backgroundColor: '#999',
});
