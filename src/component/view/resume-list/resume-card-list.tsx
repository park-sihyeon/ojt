import { CardContent, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { resumeCardListCss } from './resume-card-list.css';
import { ResumeListContainerCss } from './resume-list-container.css';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';
import { useResumeStore } from '../../../script/store/use-resume-store';
import { ResumeForm } from '../../../script/dto/resume-form-dto';

const ResumeCardList = () => {
  const { resumes, setResumes } = useResumeStore();

  useEffect(() => {
    const storedResumeForms = localStorage.getItem('resumes');
    if (storedResumeForms) {
      setResumes(JSON.parse(storedResumeForms));
    }
  }, []);

  const handleChangeList = () => {};

  const navigate = useNavigate();
  const goToResume = (item: ResumeForm) => {
    navigate(`/resume/:${item.resumeId}`);
  };

  return (
    <>
      <div className={ResumeListContainerCss.listContainer}>
        <CoreDragAndDropListView
          items={resumes}
          onChangeList={handleChangeList}
          onCreateUniqueKey={(item) => item.resumeId}
          enableDragAndDrop
          onRenderItem={(item) => (
            <div onClick={() => goToResume(item)}>
              <Card className={resumeCardListCss.cardContainer}>
                <div className={resumeCardListCss.hamburger}>
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    component="div"
                  >
                    <p>{item.title}</p>
                    <br />
                    <br />
                  </Typography>
                  <div>
                    <div>최종 편집일 : {item.date}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default ResumeCardList;
