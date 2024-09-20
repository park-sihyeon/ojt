import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const addResumeContentCss = {
  wrapAddResumeContent: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  addButton: style({
    width: `${rem(30)}`,
    height: `${rem(30)}`,
    border: '3px solid #999',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }),
};

globalStyle(`${addResumeContentCss.addButton} .column`, {
  transform: 'translate(50%, -50%)',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: `${rem(15)}`,
  height: `${rem(3)}`,
  backgroundColor: '#999',
});

globalStyle(`${addResumeContentCss.addButton} .row`, {
  transform: 'translate(50%, -50%)',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: `${rem(3)}`,
  height: `${rem(15)}`,
  backgroundColor: '#999',
});
