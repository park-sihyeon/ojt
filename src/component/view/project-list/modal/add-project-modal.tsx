import { Divider, TextField } from '@mui/material';
import { ProjectListDto } from '../../../../script/dto/project-list-dto';
import { useForm } from 'react-hook-form';
import { addProjectModalCss } from './add-project-modal.css';

interface ProjectListDtoProps {
  onProjectListSaved: (projectListDto: ProjectListDto) => void;
}

export const AddProjectModal: React.FC<ProjectListDtoProps> = ({
  onProjectListSaved,
}) => {
  //#region handle onsubmit
  const { reset, register, handleSubmit } = useForm<ProjectListDto>();
  const onSubmit = (data: ProjectListDto) => {
    onProjectListSaved({ ...data }); // 폼 데이터 전달
    reset(); // 폼 리셋
    console.log('회사 등록함');
  };
  //#endregion

  return (
    <>
      <div className={addProjectModalCss.wrapProjectList}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={addProjectModalCss.formSection}
        >
          <h2>프로젝트 정보</h2>
          <Divider />
          <div className={addProjectModalCss.flex}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="프로젝트명"
              type="text"
              {...register('title', { required: true })}
            />
            <TextField
              fullWidth
              id="outlined-required"
              label="링크"
              type="text"
              {...register('url', { required: false })}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="기간"
              type="text"
              placeholder="0000.00 ~ 0000.00"
              {...register('period', { required: true })}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="프로젝트 인원"
              type="text"
              {...register('period', { required: true })}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="프로젝트 설명"
              type="text"
              placeholder=""
              {...register('description', { required: true })}
            />
            <TextField
              fullWidth
              required
              id="outlined-multiline-static"
              multiline
              rows={4}
              // label="업무 내용"
              type="text"
              defaultValue={`직위 -
                
업무 -
                `}
              {...register('content', { required: true })}
            />
          </div>
          <button className={addProjectModalCss.submitButton} type="submit">
            등록
          </button>
        </form>
      </div>
    </>
  );
};
