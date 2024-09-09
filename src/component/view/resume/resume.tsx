import { Box, Divider, Paper, Stack } from '@mui/material';
import { ResumeCss } from './resume.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useResumeStore } from '../../../script/store/use-resume-store';
import { ResumeForm } from '../../../script/dto/resume-form-dto';

export const Resume: React.FC = () => {
  const navigate = useNavigate();
  const goToEditResume = (item: ResumeForm) => {
    navigate(`/edit-resume/:${item.resumeId}`);
  };
  //#region handle store
  const { resumeId } = useParams<{ resumeId: string }>();
  // 와 대박 짜침 반성해라 인간아
  const Formatting = resumeId?.replace(':', '');

  const { getResumeById, deleteResume } = useResumeStore();
  const resume = getResumeById(Formatting as string);

  if (!resume) {
    // 이력서 id가 잘못 매칭 되었을 때 보여줄 화면
    // 홈으로 갈 수 있게 네비처리가 필요하지 않을까???
    return <div>겟 아웃 마이 rusume!</div>;
  }
  //#endregion

  return (
    <>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': { m: 1, width: '95vw', height: '100%' },
          }}
        >
          <Paper elevation={3}>
            {/* 개인정보 */}
            <div className={ResumeCss.myInfoSection}>
              {/* 이름, 생년월일 */}
              <div>
                <div className={ResumeCss.title}></div>
                <div className={ResumeCss.title}>{resume.name}</div>
                <div>생년월일</div>
              </div>
              {/* 이메일, 휴대번호, 주소 */}
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <div>{resume.email}</div>
                <div>{resume.phoneNumber}</div>
                <div>{resume.address}</div>
              </Stack>
            </div>
            <Divider className={ResumeCss.divider} />

            {/* 소개 */}
            <div className={ResumeCss.introSection}>
              {/* 간략소개 */}
              <div>{resume.textarea}</div>
            </div>
            <Divider className={ResumeCss.divider} />

            {/* 회사 */}
            <div className={ResumeCss.companylistSection}>
              경력
              {/* 타이틀, 기간, 링크, 설명 */}
              <div>
                {resume.companyLists.map((company) => (
                  <div key={company.companyListId} className={ResumeCss.list}>
                    <div>{company.title}</div>
                    <div>{company.period}</div>
                    <div>{company.url}</div>
                    <div>{company.content}</div>
                  </div>
                ))}
              </div>
            </div>
            <Divider className={ResumeCss.divider} />

            {/* 프로젝트 */}
            <div className={ResumeCss.projectListSection}>
              <div>
                {resume.projectLists.map((project) => (
                  <div key={project.projectListId} className={ResumeCss.list}>
                    {project.title}
                    {project.description}
                    {project.personCount}
                    {project.period}
                    {project.url}
                    {project.content}
                  </div>
                ))}
              </div>
            </div>
            <button>
              <Link to="/">홈으로ㄱ</Link>
            </button>
          </Paper>
        </Box>
        <button onClick={() => deleteResume(resume.resumeId)}>삭제</button>
        <button onClick={() => goToEditResume(resume)}>수정</button>
      </div>
    </>
  );
};
