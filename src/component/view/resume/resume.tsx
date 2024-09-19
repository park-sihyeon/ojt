import { Box, Divider, Paper, Stack } from '@mui/material';
import { ResumeCss } from './resume.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useResumeStore } from '../../../script/store/use-resume-store';
import { useCompanyStore } from '../../../script/store/use-company-list-store';
import { useProjectStore } from '../../../script/store/use-project-list-store';
import { useEffect } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

export const Resume: React.FC = () => {
  const navigate = useNavigate();
  const goToEditResume = (item: string) => {
    navigate(`/edit-resume/:${item}`);
  };
  //#region handle store
  const { resumeId } = useParams<{ resumeId: string }>();
  // 와 대박 짜침 반성해라 인간아
  const Formatting = resumeId?.replace(':', '');

  const { getResumeById, deleteResume } = useResumeStore();
  const { getCompaniesByKey, deleteCompany } = useCompanyStore();
  const { getProjectesByKey, deleteProject } = useProjectStore();
  const resumeData = getResumeById(Formatting as string);
  const companyData = getCompaniesByKey(resumeData?.resumeKey as string);
  const projectData = getProjectesByKey(resumeData?.resumeKey as string);

  useEffect(() => {
    console.log('companyData', companyData);
  }, [companyData, projectData]);

  const handleDeleteResume = (item: string) => {
    deleteResume(item);
    deleteCompany(item);
    deleteProject(item);
    navigate(`/`);
  };

  //#endregion

  return (
    <>
      {!resumeId && !resumeData ? (
        <div>겟 아웃 마이 rusume! 삭제후 홈으로 작업해라 중생아</div>
      ) : (
        <div>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': { m: 1, width: '96vw', height: '100%' },
            }}
          >
            <Paper elevation={3}>
              {/* INFO Wrap */}
              <div className={ResumeCss.myInfoWrap}>
                <div className={ResumeCss.header}>
                  <div className={ResumeCss.logo} />
                  <div className={ResumeCss.logoTitle} />
                  <Link to="/">
                    <HomeOutlinedIcon />
                  </Link>
                </div>
                {/* 개인정보 */}
                <div className={ResumeCss.myInfoSection}>
                  {/* 이름, 생년월일 */}
                  <div className="flex">
                    <div className="title">{resumeData?.title}</div>
                    <div className="name">
                      <b className="subtitle">성명 : </b>
                      {resumeData?.name}
                    </div>
                  </div>
                  {/* 이메일, 휴대번호, 주소 */}
                  <Stack
                    className={ResumeCss.stackWrap}
                    direction="column"
                    divider={
                      <Divider
                        orientation="horizontal"
                        flexItem
                        sx={{ background: '#1976d2' }}
                      />
                    }
                    spacing={1}
                  >
                    <div>
                      <b className="subtitle">이메일 : </b>
                      {resumeData?.email}
                    </div>
                    <div>
                      <b className="subtitle">휴대번호 : </b>
                      {resumeData?.phoneNumber}
                    </div>
                    <div>
                      <b className="subtitle">주소 : </b>
                      {resumeData?.address}
                    </div>
                  </Stack>
                </div>
              </div>
              <Divider className={ResumeCss.sectionDivider} />

              {/* 소개 */}
              <div className={ResumeCss.introWrap}>
                <div className={ResumeCss.introSection}>
                  {/* 간략소개 */}
                  <b className="subtitle">소개 및 포부</b>
                  <div>{resumeData?.textarea}</div>
                </div>
              </div>

              <Divider className={ResumeCss.sectionDivider} />
              <div className={ResumeCss.ListSection}>
                <div>
                  회사리스트 <ApartmentOutlinedIcon />
                </div>
              </div>

              {/* 커리어 영어 몰라서 한글 쓴거 아님 진짜임 Wrap */}
              <div className={ResumeCss.companyListWrap}>
                {/* 회사 */}
                <div className={ResumeCss.companyListSection}>
                  {/* 타이틀, 기간, 링크, 설명 */}
                  <div className={ResumeCss.sectionContainer}>
                    {companyData.map((company) => (
                      <div
                        key={company.companyListId}
                        className={ResumeCss.list}
                      >
                        <div>
                          <b className="subtitle">회사명 - </b>
                          {company.title}
                        </div>
                        <div>
                          <b className="subtitle">기간 : </b>
                          {company.period}
                        </div>
                        <div>
                          <b className="subtitle">링크 : </b>
                          {company.url}
                        </div>
                        <div>
                          <b className="subtitle">업무내용 - </b>
                          <p>{company.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Divider className={ResumeCss.sectionDivider} />
              <div className={ResumeCss.ListSection}>
                <div>
                  프로젝트 리스트 <AccountTreeOutlinedIcon />
                </div>
              </div>
              {/* 프로젝트 */}
              <div className={ResumeCss.projectListWrap}>
                <div className={ResumeCss.projectListSection}>
                  <div className={ResumeCss.sectionContainer}>
                    {projectData.map((project) => (
                      <div
                        key={project.projectListId}
                        className={ResumeCss.list}
                      >
                        <div>
                          <b className="subtitle">프로젝트명 - </b>
                          {project.title}
                        </div>
                        <div>
                          <b className="subtitle">기간 : </b>
                          {project.period}
                        </div>
                        <div>
                          <div>
                            <b className="subtitle">인원수 : </b>
                            {project.personCount}
                          </div>
                          <div>
                            <b className="subtitle">링크 : </b>
                            <a href={project.url}>{project.url}</a>
                          </div>
                          <div>
                            <b className="subtitle">프로젝트 설명 - </b>
                            {project.description}
                          </div>
                          <div>
                            <b className="subtitle">업무내용 - </b>
                            <p>{project.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Paper>
            <div className={ResumeCss.buttonSection}>
              <button
                className={ResumeCss.ctaButton}
                onClick={() =>
                  handleDeleteResume(resumeData?.resumeId as string)
                }
              >
                <div className="delete">삭제</div>
              </button>
              <button
                className={ResumeCss.ctaButton}
                onClick={() => goToEditResume(resumeData?.resumeId as string)}
              >
                <div className="edit">수정</div>
              </button>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};
