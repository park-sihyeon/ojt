import { Box, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { ResumeForm } from '../../../script/dto/resume-form-dto';
import { EditResumeContent } from './edit-resume-content';

export const EditResumeContainer: React.FC = () => {
  //#region handle regist companylist
  const [resumeForms, setResumeForms] = useState<ResumeForm[]>([]);

  useEffect(() => {
    const storedResumeForms = localStorage.getItem('resumes');
    if (storedResumeForms) {
      setResumeForms(JSON.parse(storedResumeForms));
    }
  }, []);

  const saveResumeForm = (newResumeForm: ResumeForm) => {
    const updateResumeForm = [...resumeForms, newResumeForm];
    setResumeForms(updateResumeForm);
    localStorage.setItem('resumes', JSON.stringify(updateResumeForm));
  };
  //#endregion

  //#region edit, delete
  const editResumeForm = (editedResumeForm: ResumeForm) => {
    const updateResumeForm = resumeForms.map((item) =>
      item.resumeId === editedResumeForm.resumeId ? editedResumeForm : item
    );
    setResumeForms(updateResumeForm);
    localStorage.setItem('resumes', JSON.stringify(updateResumeForm));
  };

  // 삭제는 home list에서 삭제할 수 있도록 ㄱ
  // const deletResumeForm = (id: number) => {
  //   const updateResumeForm = resumeForms.filter((item) => item.id !== id);
  //   setResumeForms(updateResumeForm);
  //   localStorage.setItem('resumes', JSON.stringify(updateResumeForm));
  // };
  //#endregion

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '95vw',
            // height: '95vh',
          },
        }}
      >
        <Paper elevation={3}>
          {/* wrap */}
          <EditResumeContent onResumeSaved={saveResumeForm}></EditResumeContent>
        </Paper>
      </Box>
    </>
  );
};
