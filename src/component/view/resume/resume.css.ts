import { globalStyle, style } from '@vanilla-extract/css';

export const ResumeCss = {
  // 자기 소개
  // wrap
  myInfoWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
  }),
  // section
  myInfoSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '32px',
    marginBottom: '20px',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '460px',
  }),
  // 간략 소개
  // wrap
  introWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
    background: '#eee',
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
  // 회사 리스트
  // wrap
  companyListWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
  }),
  // section
  companyListSection: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '460px',
  }),
  // 프로젝트 리스트
  // wrap
  projectListWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
  }),
  // section
  projectListSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '460px',
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    height: '60px',
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
    padding: '20px 16px',
    gap: '16px',
    // borderTop: '1px solid #ddd',
    // borderBottom: '1px solid #ddd',
    border: '1px solid #ddd',
    marginBottom: '16px',
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
});
