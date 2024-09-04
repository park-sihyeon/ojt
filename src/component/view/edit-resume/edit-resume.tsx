import { Box, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { EditResumeCss } from './edit-resume.css';
import { InputForm } from '../_common/input-form/input-form';
import { useEffect, useState } from 'react';
import { ResumeForm } from '../../../script/dto/input-form-dto';

export const EditResume: React.FC = () => {
  console.log('이력서 등록');

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

  //#region handle delete, edit
  // const deletResumeForm = (id: number) => {
  //   const updateResumeForm = resumeForms.filter((post) => post.id !== id);
  //   setResumeForms(updateResumeForm);
  //   localStorage.setItem('resumes', JSON.stringify(updateResumeForm));
  // };

  // const editResumeForm = (editedResumeForm: ResumeForm) => {
  //   const updateResumeForm = resumeForms.map((post) =>
  //     post.id === editedResumeForm.id ? editedResumeForm : post
  //   );
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
            height: '95vh',
          },
        }}
      >
        <Paper elevation={3}>
          {/* wrap */}
          <InputForm onResumeSaved={saveResumeForm}></InputForm>
        </Paper>
      </Box>
    </>
  );
};
