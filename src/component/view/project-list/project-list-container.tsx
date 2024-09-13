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
import { ProjectListDto } from '../../../script/dto/project-list-dto';
import { useProjectStore } from '../../../script/store/use-project-list-store';
import { useEffect, useState } from 'react';

interface ProjectListContainerProps {
  resumeKey: string;
}

const ProjectListContainer: React.FC<ProjectListContainerProps> = ({
  resumeKey,
}) => {
  const {
    getProjectesByKey,
    updateProjectList,
    isModalOpen,
    updateProjectListOrder,
  } = useProjectStore();
  const [projectes, setProjectes] = useState<ProjectListDto[]>([]);
  const [isChange, setIsChange] = useState(false);
  const resumeData = projectes;

  useEffect(() => {
    const projectList = getProjectesByKey(resumeKey);
    setProjectes(projectList);
  }, [resumeKey, getProjectesByKey, isModalOpen]);

  //#region handle delete
  const handleDeleteProject = (projectId: string) => {
    const updatedProjectes = projectes.filter(
      (project) => project.projectListId !== projectId
    );
    updateProjectList(resumeKey, updatedProjectes);
    setProjectes(updatedProjectes);
  };
  //#endregion

  //#region handleChangeList
  const handleChangeList = (projectList: ProjectListDto[]) => {
    setIsChange(true);
    console.log(isChange, 'isChange');
    updateProjectListOrder(resumeKey, projectList);
  };
  //#endregion

  return (
    <>
      <div className={projectListContinerCss.wrapProjectList}>
        <AddProjectListContent resumeKey={resumeKey} />
        <div className={projectListContinerCss.dragAndDropSection}>
          {!(resumeData && resumeData.length > 0) ? (
            <div>프로젝트 목록이 없습니다 추가해주세요!!</div>
          ) : (
            <CoreDragAndDropListView
              items={resumeData}
              onChangeList={handleChangeList}
              onCreateUniqueKey={(item, i) => {
                return item.resumeKey[i];
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
                        ></AccordionSummary>
                      </div>
                    </div>
                    <AccordionDetails>
                      {/* 업무내용 */}
                      <div>{item.content}</div>
                    </AccordionDetails>
                    <AccordionActions>
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectListContainer;
