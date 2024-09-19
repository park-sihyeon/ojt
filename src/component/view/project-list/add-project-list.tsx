import { Box, Card, Divider, Modal, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { addProjectListCss, addProjectModalCss } from './add-project-list.css';
import { z } from 'zod';
import { useProjectStore } from '../../../script/store/use-project-list-store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectListDto } from '../../../script/dto/project-list-dto';

export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

const InputsSchema = z.object({
  title: z.string().min(1, '프로젝트명을 입력해주세요'),
  url: z.string().min(1, '링크를 걸어주세요'),
  period: z.string().min(1, '기간을 입력해주세요'),
  content: z.string().min(1, '업무 내용을 입력해주세요'),
  personCount: z.string().min(1, '작업인원'),
  description: z.string().min(1, '프로젝트 간략 설명'),
});
//#endregion
interface ProjectListDtoProps {
  resumeKey: string; // 수정 시를 위한 prop
}

export const AddProjectListContent: React.FC<ProjectListDtoProps> = ({
  resumeKey,
}) => {
  //#region useProjectStore
  const { isModalOpen, openModal, closeModal, addProject, currentResumeKey } =
    useProjectStore();
  //#endregion

  //#region handle modal
  const handleOpen = () => {
    const newResumeKey = resumeKey;
    // 모달 오픈 시 오픈여부 값, 이력서 매칭 키값 넘기기
    openModal(currentResumeKey as string, newResumeKey);
  };
  //#endregion

  //#region handle zod react-hook-form
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSchemaType>({
    // 수정 하려고 defualtCompany를 기본값으로 설정
    resolver: zodResolver(InputsSchema),
  });
  //#endregion

  useEffect(() => {
    console.log('add-project-list 키값 :', resumeKey);
  });

  //#region handle onsubmit
  const onProjectSubmit = (data: InputsSchemaType) => {
    // 새로운 회사 추가
    const newProjectId = Date.now().toString();
    const addProjectData: ProjectListDto = {
      ...data,
      resumeKey: resumeKey,
      projectListId: newProjectId,
    };
    addProject(addProjectData);
    console.log('프로젝트 리스트 추가', addProjectData);
    reset();
    closeModal();
  };
  //#endregion

  return (
    <>
      <div className={addProjectListCss.addProjectListWrap}>
        <Box className={addProjectListCss.boxContainer}>
          <Card
            style={{
              minHeight: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={addProjectListCss.buttonSection}
              onClick={handleOpen}
            >
              <div className={addProjectListCss.addButton}>
                <span className="column" />
                <span className="row" />
              </div>
            </div>
            <Modal
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              open={isModalOpen}
              onClose={closeModal}
            >
              <Box
                sx={{
                  width: '94vw',
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                  overflow: 'scroll',
                }}
              >
                <div className={addProjectModalCss.wrapProjectList}>
                  <form
                    onSubmit={handleSubmit(onProjectSubmit)}
                    className={addProjectModalCss.formContainer}
                  >
                    <div className={addProjectModalCss.inputSection}>
                      <h2>프로젝트 정보</h2>
                      <Divider />
                      <div className={addProjectModalCss.flex}>
                        <TextField
                          fullWidth
                          required
                          id="outlined-required"
                          label="프로젝트명"
                          type="text"
                          error={!!errors.title}
                          helperText={errors.title?.message}
                          {...register('title', { required: true })}
                        />
                        <TextField
                          fullWidth
                          id="outlined-required"
                          label="링크"
                          type="text"
                          error={!!errors.url}
                          helperText={errors.url?.message}
                          {...register('url', { required: false })}
                        />
                        <TextField
                          fullWidth
                          required
                          id="outlined-required"
                          label="기간"
                          type="text"
                          placeholder="0000.00 ~ 0000.00"
                          error={!!errors.period}
                          helperText={errors.period?.message}
                          {...register('period', { required: true })}
                        />
                        <TextField
                          fullWidth
                          required
                          id="outlined-required"
                          label="프로젝트 인원"
                          type="text"
                          error={!!errors.personCount}
                          helperText={errors.personCount?.message}
                          {...register('personCount', { required: true })}
                        />
                        <TextField
                          fullWidth
                          required
                          id="outlined-required"
                          label="프로젝트 설명"
                          type="text"
                          placeholder=""
                          error={!!errors.description}
                          helperText={errors.description?.message}
                          {...register('description', { required: true })}
                        />
                        <TextField
                          fullWidth
                          required
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          label="업무 내용"
                          type="text"
                          defaultValue={`역할 -`}
                          error={!!errors.content}
                          helperText={errors.content?.message}
                          {...register('content', { required: true })}
                        />
                      </div>
                    </div>
                    <button
                      className={addProjectModalCss.submitButton}
                      type="submit"
                    >
                      등록
                    </button>
                  </form>
                </div>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
