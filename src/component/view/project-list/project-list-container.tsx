import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { projectListContinerCss } from './project-list-container.css';
import { AddProjectListContent } from './add-project-list';
import { useResumeStore } from '../../../script/store/use-resume-store';
import { useParams } from 'react-router-dom';
import { ProjectListDto } from '../../../script/dto/project-list-dto';
import { useProjectStore } from '../../../script/store/use-project-list-store';

const ProjectListContainer = () => {
  //#region get local
  const { resumeId } = useParams<{ resumeId: string }>();
  const { getResumeById } = useResumeStore();
  const { deleteProject } = useProjectStore();

  if (!resumeId)
    return (
      <div>
        이력서에 프로젝트 경력이 없어ㅇㅅㅇ 추가해줘
        <AddProjectListContent />
      </div>
    );
  const formattedResumeId = resumeId.replace(':', '');
  const resumeData = getResumeById(formattedResumeId);
  //#endregion

  //#region handle save
  const handleEditProject = (item: ProjectListDto) => {
    // 수정 시 모달 어픈
    console.log('컨설 수정 모달 오쁜', item);
  };
  //#endregion

  //#region handle delete
  const handleDeleteProject = (id: string) => {
    deleteProject(id);
  };
  //#endregion

  return (
    <>
      <div className={projectListContinerCss.wrapProjectList}>
        <AddProjectListContent />
        <div className={projectListContinerCss.dragAndDropSection}>
          <CoreDragAndDropListView
            // containerClassName={projectListContinerCss.flex}
            items={resumeData?.projectLists}
            onCreateUniqueKey={(item, i) => {
              return item.projectListId[i];
            }}
            onRenderItem={(item) => (
              <div>
                <Accordion className={projectListContinerCss.accordrion}>
                  <div className="column">
                    <div>
                      <p className="accordion-title">{item.title}</p>
                      <p className="accordion-period">{item.period}</p>
                      <div className={projectListContinerCss.hamburger}>
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                      </div>
                    </div>
                    <div className={projectListContinerCss.flex}>
                      <p>상세 보기</p>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ width: 30 }} />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        {' '}
                        {/* test */}
                        {/* 회사명 / 기간 */}
                      </AccordionSummary>
                    </div>
                  </div>
                  <AccordionDetails>
                    {/* 업무내용 */}
                    <div>{item.content}</div>
                  </AccordionDetails>
                  <AccordionActions>
                    <Button onClick={() => handleEditProject(item)}>
                      수정
                    </Button>
                    //{' '}
                    <Button
                      onClick={() => handleDeleteProject(item.projectListId)}
                    >
                      삭제
                    </Button>
                  </AccordionActions>
                </Accordion>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectListContainer;
