import { ResumeListContainerCss } from './resume-list-container.css';
import { AddResumeContent } from './add-resume-content';
import CardBox from '../_common/card/card-box';

const ResumeListContainer = () => {
  return (
    <>
      <div className={ResumeListContainerCss.wrapResumeListContainer}>
        <br />
        <br />
        이력서 추가 및 조회 영역
        <div className={ResumeListContainerCss.line} />
        <AddResumeContent></AddResumeContent>
        <CardBox></CardBox>
      </div>
    </>
  );
};

export default ResumeListContainer;
