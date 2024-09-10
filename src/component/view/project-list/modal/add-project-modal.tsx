import { Divider, TextField } from '@mui/material';
import { ProjectListDto } from '../../../../script/dto/project-list-dto';
import { useForm } from 'react-hook-form';
import { addProjectModalCss } from './add-project-modal.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProjectStore } from '../../../../script/store/use-project-list-store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//#region handle zod
export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

const InputsSchema = z.object({
  title: z.string().min(1, '프로젝트명을 입력해주세요'),
  url: z.string().min(1, '링크를 걸어주세요'),
  period: z.string().min(1, '기간을 입력해주세요'),
  content: z.string().min(1, '업무 내용을 입력해주세요'),
  personCount: z.number().min(1, '작업인원'),
  description: z.string().min(1, '프로젝트 간략 설명'),
});
//#endregion
interface ProjectListDtoProps {
  defualtproject?: ProjectListDto; // 수정 시를 위한 prop
}

export const AddProjectModal: React.FC<ProjectListDtoProps> = ({
  defualtproject,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSchemaType>({
    defaultValues: defualtproject, // 수정 하려고 defualtCompany를 기본값으로 설정
    resolver: zodResolver(InputsSchema),
  });

  const { getProjectById, addProject, updateProject } = useProjectStore();

  //#region 수정 시 기본값으로 reset 시키기
  const { resumeId } = useParams<{ resumeId: string }>();
  useEffect(() => {
    if (resumeId) {
      const projectData = getProjectById(resumeId);
      if (projectData) {
        reset({
          title: projectData.title,
          url: projectData.url,
          content: projectData.content,
          period: projectData.period,
          personCount: projectData.personCount,
          description: projectData.description,
        });
      }
    }
  }, [resumeId, getProjectById, reset]);
  //#endregion

  //#region handle onsubmit
  const onSubmit = (data: InputsSchemaType) => {
    if (!resumeId) {
      // 회사 리스트 등록
      const addProjectData: Omit<ProjectListDto, 'projectListId' | 'index'> = {
        ...data,
      };
      addProject(addProjectData);
    } else {
      // 회사 리스트 수정
      const updateProjectData: ProjectListDto = {
        ...data,
        index: Number(resumeId),
        projectListId: Date.now().toString(),
      };
      reset();
      updateProject(updateProjectData);
    }
    reset(); // 폼 리셋
    console.log('회사 등록함');
    // 모달 닫힘 ? or 계속 등록? 이건 마지막에 하자
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
          <button className={addProjectModalCss.submitButton} type="submit">
            등록
          </button>
        </form>
      </div>
    </>
  );
};
