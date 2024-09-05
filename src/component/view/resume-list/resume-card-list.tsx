import { CardContent, Card, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ResumeForm } from '../../../script/dto/input-form-dto';
import { useEffect, useState } from 'react';
import { resumeCardListCss } from './resume-card-list.css';
import { ResumeListContainerCss } from './resume-list-container.css';
import CoreDragAndDropListView from '../_common/_core/core-drag-and-drop-view';

const ResumeCardList = () => {
  //#region get local
  useEffect(() => {
    const storedResumeForms = localStorage.getItem('resumes');
    if (storedResumeForms) {
      setResumeForms(JSON.parse(storedResumeForms));
    }
  }, []);

  const [resumeForms, setResumeForms] = useState<ResumeForm[]>([]);
  console.log('get resumeForms :', resumeForms);
  //#endregion

  //#region handle dnd
  const handleChangeList = () => {
    return console.log('home 화면');
  };
  //#endregion

  //#region handle navigation
  const navigate = useNavigate();
  const goToResume = () => {
    navigate('/resume');
  };
  //#endregion

  return (
    <>
      <div className={ResumeListContainerCss.listContainer}>
        <CoreDragAndDropListView
          items={resumeForms}
          onChangeList={handleChangeList}
          onCreateUniqueKey={(item) => {
            return item.name.toString();
          }}
          enableDragAndDrop
          onRenderItem={(item) => (
            <Link to="/resume">
              <div onClick={goToResume}>
                <Card className={resumeCardListCss.cardContainer}>
                  <div className={resumeCardListCss.hamburger}>
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                  </div>
                  <CardContent>
                    {/* drag and drop icon */}
                    {/* 이후 아이콘으로 바꿔 */}
                    <Typography
                      variant="h6"
                      color="text.secondry"
                      component="div"
                    >
                      <p>{item.name}</p>
                      <br />
                      <br />
                    </Typography>
                    <div>
                      <div>최종 편집일 : {item.date}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          )}
        />
      </div>
    </>
  );
};

export default ResumeCardList;
