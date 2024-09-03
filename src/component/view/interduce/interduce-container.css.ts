import { globalStyle, style } from '@vanilla-extract/css';

export const interduceContainerCss = {
  wrapInterduceContainer: style({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#eee',
    // marginTop: '20px',
    paddingTop: '20px',
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
    gap: '5px',
    marginBottom: '20px',
  }),
  modalFlexAlign: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }),
  flexAlign: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: '10px',
    margin: '20px 0 20px',
  }),
  addPicture: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid #bbb',
    borderRadius: '5px',
    fontSize: '12px',
    color: '#bbb',
    padding: '30px 30px',
  }),
  addButton: style({
    width: '30px',
    height: '30px',
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
    // padding: '30px',
    height: '90px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
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
  width: '10px',
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
  height: '10px',
  backgroundColor: '#999',
});

globalStyle(`button`, {});
