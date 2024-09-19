import { style } from '@vanilla-extract/css';
import { rem } from '../../../resource/theme/theme-implements';

export const EditResumeContainerCss = {
  // 자기 소개
  myInfoSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
  }),
  // 간략 소개
  introSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
  }),
  // 회사 리스트
  companylistSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
  }),
  // 프로젝트 리스트
  projectListSection: style({
    padding: `${rem(16)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: `${rem(8)}`,
    marginBottom: `${rem(16)}`,
    flexDirection: 'column',
  }),
  // class style 미리 지정
  title: style({
    // 일단 만들어놓고 지워
    fontSize: `${rem(24)}`,
    fontWeight: 700,
  }),
  letterLine: style({
    // 일단 만들어놓고 지워
  }),
  magingBottom: style({
    // 일단 만들어놓고 지워
    marginBottom: `${rem(16)}`,
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
};
