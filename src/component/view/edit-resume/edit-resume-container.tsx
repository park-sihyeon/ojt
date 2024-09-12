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
  };
  //#endregion

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '96vw',
            height: '100%',
          },
        }}
      >
        <Paper elevation={3} sx={{ position: 'relative', padding: '0 0 90px' }}>
          {/* wrap */}
          <EditResumeContent onResumeSaved={saveResumeForm}></EditResumeContent>
        </Paper>
      </Box>
    </>
  );
};
