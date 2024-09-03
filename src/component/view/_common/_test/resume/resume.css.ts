import { style } from '@vanilla-extract/css';

export const ResumeCss = {
  // 자기 소개
  myInfoSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
  }),
  // 간략 소개
  introSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
  }),
  // 회사 리스트
  companylistSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
  }),
  // 프로젝트 리스트
  projectListSection: style({
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
  }),
  // class style 미리 지정
  title: style({
    // 일단 만들어놓고 지워
    fontSize: '24px',
    fontWeight: 700,
  }),
  letterLine: style({
    // 일단 만들어놓고 지워
  }),
  magingBottom: style({
    // 일단 만들어놓고 지워
    marginBottom: '20px',
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
};
