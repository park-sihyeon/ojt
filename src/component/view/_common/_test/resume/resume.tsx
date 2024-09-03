import { Box, Divider, Paper, Stack } from '@mui/material';
import { ResumeCss } from './resume.css';
import { Link } from 'react-router-dom';

export const Resume = () => {
  console.log('이력서');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '95vw',
            height: '95vh',
          },
        }}
      >
        <Paper elevation={3}>
          {/* wrap */}
          <div className={ResumeCss.myInfoSection}>
            {/* 개인정보 */}
            <div>
              <div className={ResumeCss.title}>이름</div>
              <div>생년월일</div>
            </div>
            <div>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <div>이메일</div>
                <div>휴대폰</div>
                <div>주소</div>
              </Stack>
            </div>
          </div>
          <Divider className={ResumeCss.divider} />
          {/* wrap */}
          <div className={ResumeCss.introSection}>
            간략소개
            {/* 소개 */}
            <div>
              어 나야 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci aperiam iure dolor odit totam natus est fugiat provident,
              quae dignissimos.
            </div>
          </div>
          {/* wrap */}
          <div className={ResumeCss.companylistSection}>
            경력
            {/* 회사 */}
            <div>
              {/* + 리스트 형식으로 추가 */}
              추가 햇님반 행동대장 6개월
            </div>
          </div>
          {/* wrap */}
          <div className={ResumeCss.projectListSection}>
            {/* 프로젝트 */}
            <div>
              {/* + 리스트 형식으로 추가 */}
              대박 유치원 합주
            </div>
          </div>
          <button>
            <Link to="/">홈으로ㄱ</Link>
          </button>
        </Paper>
      </Box>
    </>
  );
};
