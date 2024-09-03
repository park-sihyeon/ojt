// 화면상으로 보기위해 생성

import { Box, Card } from '@mui/material';
import { addResumeContentCss } from './add-resume-content.css';
import { useNavigate } from 'react-router-dom';

export const AddResumeContent = () => {
  // 등록/수정 페이지로 이동
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/edit-resume');
  };

  return (
    <>
      <div onClick={handleNavigate}>
        <Box sx={{ width: '95vw' }}>
          <Card
            style={{
              minHeight: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className={addResumeContentCss.wrapAddResumeContent}>
              <div className={addResumeContentCss.addButton}>
                <span className="column" />
                <span className="row" />
              </div>
            </div>
          </Card>
        </Box>
      </div>
    </>
  );
};
