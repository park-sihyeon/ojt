import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { interduceContainerCss } from './interduce-container.css';
import { useEffect, useState } from 'react';
import { ResumeTitle } from '../../../script/dto/resume-title-dto';
import { useForm } from 'react-hook-form';

export const InterduceContainer = () => {
  //#region handle set localStorage & onSumit
  const {
    reset,
    register,
    handleSubmit, // 자동으로 event.preventDefault()를 호출 및 리프레시 막고 유효성 검사
    // control,
    // watch, // 입력 여부 확인
  } = useForm<ResumeTitle>();

  const [resumeTitle, setResumeTitles] = useState<ResumeTitle>({
    name: '',
    textarea: '',
  });

  useEffect(() => {
    const storedResumeTitle = localStorage.getItem('resume-title');
    console.log('시점:', 1, storedResumeTitle);
    if (storedResumeTitle) {
      // setResumeTitles(JSON.parse(storedResumeTitle));
      const parsedResumeTitle = JSON.parse(storedResumeTitle);
      setResumeTitles(parsedResumeTitle);
      console.log('시점:', 2);
    }
  }, []);

  const saveResumeTitle = (newResumeTitle: ResumeTitle) => {
    console.log('시점:', 3);
    // const updateResumeTitle = [...resumeTitle, newResumeTitle];
    // setResumeTitles(updateResumeTitle);
    // localStorage.setItem('resume-title', JSON.stringify(updateResumeTitle));
    setResumeTitles(newResumeTitle);
    localStorage.setItem('resume-title', JSON.stringify(newResumeTitle));
  };

  const onSubmit = (data: ResumeTitle) => {
    saveResumeTitle(data);
    reset(); // 폼 리셋
    console.log('자기소개 등록/수정함');
  };
  // const onSubmit: SubmitHandler<ResumeTitle> = (data) => {
  //   console.log('자기소개 등록/수정함', data);
  //   saveResumeTitle(data);
  //   reset(); // 폼 리셋
  // };
  //#endregion

  //#region handle modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //#endregion

  return (
    <>
      <div className={interduceContainerCss.wrapInterduceContainer}>
        <Box sx={{ width: '95vw' }}>
          <Card style={{ padding: 30 }}>
            <div className={interduceContainerCss.innerInterduceContainer}>
              <Stack>
                <div className={interduceContainerCss.letterAndAvatar}>
                  <Avatar>P</Avatar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {resumeTitle.name || '이름없음'}
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1, height: '40px', overflow: 'hidden' }}
                >
                  {resumeTitle.textarea || '내용없음'}
                </Typography>
                <div onClick={handleOpen}>
                  <Button type="button">수정</Button>
                </div>
                {/* 모달 전부 밖으로 빼자 */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  className={interduceContainerCss.modalFlexAlign}
                >
                  <Box
                    sx={{
                      width: '95vw',
                      height: '50vh',
                      // borderTopRightRadius: 15,
                      // borderTopLeftRadius: 15,
                      borderRadius: '15px',
                      padding: '30px',
                      backgroundColor: '#fff',
                      position: 'relative',
                    }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p>
                        <b>자기소개 수정</b>
                      </p>
                      <Divider />
                      <div className={interduceContainerCss.flexAlign}>
                        <div className={interduceContainerCss.addPicture}>
                          <div className={interduceContainerCss.addButton}>
                            <span className="column" />
                            <span className="row" />
                          </div>
                          <p>사진추가</p>
                        </div>
                        <TextField
                          required
                          id="outlined-required"
                          label="이름"
                          type="name"
                          {...register('name', { required: true })}
                        />
                      </div>
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="간략 소개"
                          multiline
                          rows={4}
                          type="text"
                          placeholder="내용을 적어주세요"
                          className={interduceContainerCss.width}
                          {...register('textarea', { required: false })}
                        />
                      </div>
                      <button
                        className={interduceContainerCss.submitButton}
                        type="submit"
                      >
                        저장
                      </button>
                    </form>
                  </Box>
                </Modal>
              </Stack>
              {/* <EditButton /> */}
            </div>
          </Card>
        </Box>
      </div>
    </>
  );
};
