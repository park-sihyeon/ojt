import { ResumeListContainerCss } from './resume-list-container.css';
import { AddResumeContent } from './add-resume-content';
import ResumeCardList from './resume-card-list';
import { Divider } from '@mui/material';

const ResumeListContainer = () => {
  return (
    <>
      <div className={ResumeListContainerCss.wrapResumeListContainer}>
        <div className={ResumeListContainerCss.addAndListSection}>
          <h2 className={ResumeListContainerCss.subtitle}>
            ADD RESUME & RESUME LIST
          </h2>
          <Divider
            variant="middle"
            className={ResumeListContainerCss.divider}
          />
        </div>
        <AddResumeContent></AddResumeContent>
        <Divider variant="middle" className={ResumeListContainerCss.divider} />
        <ResumeCardList></ResumeCardList>
      </div>
    </>
  );
};

export default ResumeListContainer;
