import { ToolBar } from '../_common/tool-bar/tool-bar';
import { InterduceContainer } from '../interduce/interduce-container';
import ResumeListContainer from '../resume-list/resume-list-container';
import { homContentCss } from './home-content.css';

export const HomeContent = () => {
  return (
    <>
      <div className={homContentCss.wrapHomeContent}>
        {/* tool-bar */}
        <ToolBar></ToolBar>
        <InterduceContainer></InterduceContainer>
        {/* resume-interduce*/}
        <ResumeListContainer></ResumeListContainer>
        {/* 확인 용 */}
        {/* button-area */}
        {/* resume-list */}
        {/* resume-no-content */}
      </div>
    </>
  );
};
