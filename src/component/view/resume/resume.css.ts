import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

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
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
    minWidth: `${rem(300)}`,
    maxWidth: `${rem(460)}`,
    gap: `${rem(8)}`,
    background: '#F7F8F9',
  }),
  // 간략 소개
  // wrap
  introWrap: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: `${rem(8)}`,
  }),
  // section
  introSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
    minWidth: `${rem(300)}`,
    maxWidth: `${rem(460)}`,
  }),
  // 경력
  // section
  ListSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
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
    padding: `${rem(16)}`,
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
    padding: `${rem(16)}`,
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
    height: `${rem(80)} !important`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }),
  ctaButton: style({
    width: '49.5%',
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
    gap: `${rem(16)}`,
    height: `${rem(80)}`,
    width: '100%',
  }),
  logo: style({
    backgroundImage: 'url(../../../../public/logo.svg)',
    width: `${rem(44)}`,
    height: `${rem(44)}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderStyle: 'none',
  }),
  logoTitle: style({
    backgroundImage: 'url(../../../../public/title.svg)',
    width: `${rem(166)}`,
    height: `${rem(25)}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderStyle: 'none',
  }),
  description: style({
    // 일단 만들어놓고 지워
  }),
  subDescription: style({
    // 일단 만들어놓고 지워
    fontSize: `${rem(16)}`,
    fontWeight: 300,
  }),
  divider: style({
    // 일단 만들어놓고 지워
    marginBottom: `${rem(16)}`,
  }),
  sectionDivider: style({
    height: '0.2px',
    // background: '#1976d2',
  }),
  label: style({
    // 일단 만들어놓고 지워
    padding: `${rem(5)}`,
    border: '1px solid #ddd',
    borderRadius: `${rem(8)}`,
  }),
  legend: style({
    // 일단 만들어놓고 지워
    fontWeight: 700,
    color: '#111',
  }),
  list: style({
    display: 'flex',
    flexDirection: 'column',
    padding: `${rem(16)}`,
    gap: `${rem(16)}`,
    border: '1px solid #ddd',
    borderRadius: `${rem(16)}`,
    marginBottom: `${rem(16)}`,
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
  gap: `${rem(16)}`,
});

globalStyle(`${ResumeCss.myInfoSection} .title`, {
  fontSize: `${rem(24)}`,
  fontWeight: 700,
});
globalStyle(`${ResumeCss.myInfoSection} .name`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
});
globalStyle(`${ResumeCss.myInfoSection} .subtitle`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  color: '#555',
});
globalStyle(`${ResumeCss.introSection} .subtitle`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  color: '#555',
});
globalStyle(`${ResumeCss.companyListSection} .subtitle`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  color: '#555',
  letterSpacing: '1.3px',
});
globalStyle(`${ResumeCss.projectListSection} .subtitle`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  color: '#555',
  letterSpacing: '1.3px',
});
globalStyle(`${ResumeCss.ctaButton} .delete`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  background: '#464C53',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: `${rem(4)}`,
});
globalStyle(`${ResumeCss.ctaButton} .edit`, {
  fontSize: `${rem(16)}`,
  fontWeight: 700,
  background: '#2F80ED',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: `${rem(4)}`,
});
globalStyle(`${ResumeCss.ListSection} > div`, {
  fontSize: `${rem(18)}`,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: `${rem(8)}`,
  width: '100%',
  color: '#1976d2',
});
globalStyle(':: -webkit-transition', {
  boxShadow: '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});
