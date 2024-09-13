import { globalStyle, style } from '@vanilla-extract/css';

export const ResumeCss = {
  // 자기 소개
  // wrap
  myInfoWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  // section
  myInfoSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    marginBottom: '20px',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '460px',
    gap: '8px',
    background: '#F7F8F9',
  }),
  // 간략 소개
  // wrap
  introWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
  }),
  // section
  introSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '8px',
    marginBottom: '20px',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '460px',
  }),
  // 경력
  // section
  ListSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    flexDirection: 'column',
  }),
  // 회사 리스트
  // wrap
  companyListWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#eee',
    padding: '16px',
  }),
  // section
  companyListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
    width: '100%',
  }),
  // 프로젝트 리스트
  // wrap
  projectListWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#eee',
    padding: '16px',
  }),
  // section
  projectListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
    width: '100%',
  }),
  sectionContainer: style({
    width: '100%',
  }),
  buttonSection: style({
    width: '100% !important',
    height: '80px !important',
    display: 'flex',
    flexDirection: 'row',
  }),
  ctaButton: style({
    width: '50%',
  }),

  // etc
  // class style 미리 지정
  letterLine: style({
    // 일단 만들어놓고 지워
  }),
  stackWrap: style({
    width: '100%',
  }),
  header: style({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '16px',
    height: '80px',
    width: '100%',
  }),
  logo: style({
    backgroundImage: 'url(../../../../public/logo.svg)',
    width: '44px',
    height: '44px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderStyle: 'none',
  }),
  logoTitle: style({
    backgroundImage: 'url(../../../../public/title.svg)',
    width: '166px',
    height: '25px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderStyle: 'none',
  }),
  description: style({
    // 일단 만들어놓고 지워
  }),
  subDescription: style({
    // 일단 만들어놓고 지워
    fontSize: '16px',
    fontWeight: 300,
  }),
  divider: style({
    // 일단 만들어놓고 지워
    marginBottom: '20px',
  }),
  sectionDivider: style({
    height: '0.2px',
    // background: '#1976d2',
  }),
  label: style({
    // 일단 만들어놓고 지워
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '10px',
  }),
  legend: style({
    // 일단 만들어놓고 지워
    fontWeight: 700,
    color: '#111',
  }),
  list: style({
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    gap: '16px',
    border: '1px solid #ddd',
    borderRadius: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    overflow: 'hidden',
  }),
};

// global style
// 자기 소개
// wrap
globalStyle(`${ResumeCss.myInfoSection} .flex`, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '16px',
});

globalStyle(`${ResumeCss.myInfoSection} .title`, {
  fontSize: '24px',
  fontWeight: 700,
});
globalStyle(`${ResumeCss.myInfoSection} .name`, {
  fontSize: '20px',
  fontWeight: 700,
});
globalStyle(`${ResumeCss.myInfoSection} .subtitle`, {
  fontSize: '16px',
  fontWeight: 700,
  color: '#555',
});
globalStyle(`${ResumeCss.introSection} .subtitle`, {
  fontSize: '16px',
  fontWeight: 700,
  color: '#555',
});
globalStyle(`${ResumeCss.companyListSection} .subtitle`, {
  fontSize: '16px',
  fontWeight: 700,
  color: '#555',
  letterSpacing: '1.3px',
});
globalStyle(`${ResumeCss.projectListSection} .subtitle`, {
  fontSize: '16px',
  fontWeight: 700,
  color: '#555',
  letterSpacing: '1.3px',
});
globalStyle(`${ResumeCss.ctaButton} .delete`, {
  fontSize: '16px',
  fontWeight: 700,
  background: '#2F80ED',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});
globalStyle(`${ResumeCss.ctaButton} .edit`, {
  fontSize: '16px',
  fontWeight: 700,
  background: '#2F80ED',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});
globalStyle(`${ResumeCss.ListSection} > div`, {
  fontSize: '16px',
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
});
globalStyle(':: -webkit-transition', {
  boxShadow: '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});
