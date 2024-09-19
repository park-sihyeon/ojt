import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';
import { theme } from '../../../resource/theme/theme.css';

export const interduceContainerCss = {
  wrapInterduceContainer: style({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#eee',
    paddingTop: `${rem(16)}`,
  }),
  innerInterduceContainer: style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
  }),
  letterAndAvatar: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
  }),
  boxContianer: style({
    width: '95vw',
    height: '50vh',
    borderRadius: `${rem(16)}`,
    padding: `${rem(32)}`,
    backgroundColor: '#fff',
    position: 'relative',
  }),
  modalFlexAlign: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${rem(16)}`,
  }),
  flexAlign: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: `${rem(8)}`,
    margin: `${rem(20)} 0 ${rem(20)}`,
  }),
  addPicture: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid #bbb',
    borderRadius: `${rem(8)}`,
    fontSize: `${rem(12)}`,
    color: '#bbb',
    padding: `${rem(32)}`,
    width: `${rem(100)}`,
    height: `${rem(120)}`,
  }),
  editButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    right: '0',
    width: `${rem(80)}`,
    height: `${rem(40)}`,
    background: '#1976d2',
    borderRadius: `${rem(8)}`,
  }),
  addButton: style({
    width: `${rem(32)}`,
    height: `${rem(32)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }),
  submitButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // padding: `${rem(32)}`,
    height: `${rem(90)}`,
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: `${rem(16)}`,
    fontWeight: '700',
    border: 'none',
    borderBottomLeftRadius: `${rem(16)}`,
    borderBottomRightRadius: `${rem(16)}`,
  }),
  width: style({
    width: '100%',
  }),
};
globalStyle(`${interduceContainerCss.addButton} .column`, {
  transform: 'translate(50%, -50%)',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: `${rem(8)}`,
  height: '2px',
  backgroundColor: '#999',
});

globalStyle(`${interduceContainerCss.addButton} .row`, {
  transform: 'translate(50%, -50%)',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  right: '50%',
  width: '2px',
  height: `${rem(8)}`,
  backgroundColor: '#999',
});

globalStyle(`${interduceContainerCss.editButton} > button`, {
  fontSize: theme.fontSize[16],
  fontWeight: '500',
  color: '#fff',
});
