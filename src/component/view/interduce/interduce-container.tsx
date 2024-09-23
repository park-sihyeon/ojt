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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IntroDto } from '../../../script/dto/intro-dto';
import { useIntroStore } from '../../../script/store/use-introduce-store';

export const InterduceContainer = () => {
  //#region handle onSumit
  const {
    reset,
    register,
    handleSubmit, // 자동으로 event.preventDefault()를 호출 및 리프레시 막고 유효성 검사
  } = useForm<IntroDto>();

  const { addIntro, getIntro, updateIntro } = useIntroStore();

  const introData = getIntro();

  const onSubmit = (data: IntroDto) => {
    if (!introData) {
      addIntro(data);
    } else {
      updateIntro(data);
    }
    reset({
      name: introData?.name,
      description: introData?.description,
      imageUrl: introData?.imageUrl,
    }); // 폼 리셋
    handleModalClose();
  };

  //#region handle modalopen
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  //#endregion

  return (
    <>
      <div className={interduceContainerCss.wrapInterduceContainer}>
        <Box sx={{ width: '95vw' }}>
          <Card style={{ padding: 16 }}>
            <div className={interduceContainerCss.innerInterduceContainer}>
              <Stack>
                <div className={interduceContainerCss.letterAndAvatar}>
                  <Avatar>P</Avatar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {introData?.name || '이름없음'}
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1, height: '40px', overflow: 'hidden' }}
                >
                  {introData?.description || '내용없음'}
                </Typography>
                <div
                  className={interduceContainerCss.editButton}
                  onClick={handleModalOpen}
                >
                  <Button type="button">수정</Button>
                </div>
                {/* 모달 전부 밖으로 빼자 */}
                <Modal
                  open={open}
                  onClose={handleModalClose}
                  className={interduceContainerCss.modalFlexAlign}
                >
                  <Box className={interduceContainerCss.boxContianer}>
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
                          fullWidth
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
                          {...register('description', { required: false })}
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
