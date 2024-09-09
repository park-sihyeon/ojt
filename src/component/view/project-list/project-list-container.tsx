import { useEffect, useState } from 'react';
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
import { mockGetTest } from '../../../script/mock/company-list';
import { AddProjectListContent } from './add-project-list';

const ProjectListContainer = () => {
  //#region get local
  useEffect(() => {
    const storedProjectLists = localStorage.getItem('project-list');
    if (storedProjectLists) {
      setProjectLists(JSON.parse(storedProjectLists));
    }
  }, []);

  // const [projectList, setProjectLists] = useState<ProjectListDto[]>([]);
  const [projectList, setProjectLists] = useState(mockGetTest);
  //#endregion

  //#region handle dnd
  const handleChangeList = () => {
    return console.log('wow');
  };
  //#endregion

  return (
    <>
      <div className={projectListContinerCss.wrapProjectList}>
        <AddProjectListContent />
        <div className={projectListContinerCss.dragAndDropSection}>
          <CoreDragAndDropListView
            // containerClassName={projectListContinerCss.flex}
            items={projectList}
            onChangeList={handleChangeList}
            onCreateUniqueKey={(item, i) => {
              return item.projectLists[i].projectListId.toString();
            }}
            onRenderItem={(item, i) => (
              <div>
                <Accordion className={projectListContinerCss.accordrion}>
                  <div className="column">
                    <div>
                      <p className="accordion-title">
                        {item.projectLists[i].title || ''}
                      </p>
                      <p className="accordion-period">
                        {item.projectLists[i].period || ''}
                      </p>
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
                    <div>{item.projectLists[i].content || ''}</div>
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>수정</Button>
                    <Button>삭제</Button>
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
