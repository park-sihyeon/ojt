import dayjs from 'dayjs';
import { Divider, TextField } from '@mui/material';
import { CompanyListDto } from '../../../../script/dto/company-list-dto';
import { useForm } from 'react-hook-form';
import { addCompanyModalCss } from './add-company-modal.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResumeStore } from '../../../../script/store/use-resume-store';
import { ResumeForm } from '../../../../script/dto/resume-form-dto';

//#region handle zod
export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

const InputsSchema = z.object({
  title: z.string().min(1, '회사명을 입력해주세요'),
  url: z.string().min(1, '링크를 걸어주세요'),
  period: z.string().min(1, '기간을 입력해주세요'),
  content: z.string().min(1, '업무 내용을 입력해주세요'),
});
//#endregion

interface CompanyListDtoProps {
  defualtCompany?: CompanyListDto; // 수정 시를 위한 prop
}

export const AddCompanyModal: React.FC<CompanyListDtoProps> = ({
  defualtCompany,
}) => {
  //#region handle zod react-hook-form
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSchemaType>({
    defaultValues: defualtCompany, // 수정 하려고 defualtCompany를 기본값으로 설정
    resolver: zodResolver(InputsSchema),
  });
  //#endregion

  // const { getCompanyById, addCompany, updateCompany } = useCompanyStore();
  const { getResumeById, addResumeCompany, updateResumeCompany } =
    useResumeStore();

  //#region 수정으로 들어올 시 기본값으로 reset 시키기
  const { resumeId } = useParams<{ resumeId: string }>();

  useEffect(() => {
    if (resumeId) {
      const companyData = getResumeById(resumeId)?.companyLists;
      const index = Number(getResumeById(resumeId)?.index);
      if (companyData) {
        reset({
          title: companyData[index].title,
          url: companyData[index].url,
          content: companyData[index].content,
          period: companyData[index].period,
        });
      }
    }
  }, [resumeId, getResumeById, reset]);
  // const { resumeId } = useParams<{ resumeId: string }>();
  // useEffect(() => {
  //   if (resumeId) {
  //     const companyData = getCompanyById(resumeId);
  //     if (companyData) {
  //       reset({
  //         title: companyData.title,
  //         url: companyData.url,
  //         content: companyData.content,
  //         period: companyData.period,
  //       });
  //     }
  //   }
  // }, [resumeId, getCompanyById, reset]);
  //#endregion

  //#region handle onsubmit
  const onSubmit = (data: InputsSchemaType) => {
    if (!resumeId) {
      // 회사 리스트 등록
      console.log('회사 리스트 등록');
      const addCompanyData: Omit<CompanyListDto, 'companyListId' | 'index'> = {
        ...data,
        date: dayjs().format('YYYY-MM-DD'),
      };
      addResumeCompany(addCompanyData);
      console.log('addCompanyData가 궁그메 :', addCompanyData);
      console.log(
        'addResumeCompany(addCompanyData)가 궁그메 :',
        addResumeCompany(addCompanyData)
      );
      // addCompany(addCompanyData);
    } else {
      // 회사 리스트 수정
      console.log('회사 리스트 수정');
      const resumeData = getResumeById(resumeId);
      const updateCompanyData: Omit<
        ResumeForm,
        | 'projectLists'
        | 'title'
        | 'name'
        | 'gender'
        | 'phoneNumber'
        | 'textarea'
        | 'email'
      > = {
        date: dayjs().format('YYYY-MM-DD'),
        index: Number(resumeData?.index),
        resumeId: resumeId,
        companyLists: [
          {
            ...data,
            date: dayjs().format('YYYY-MM-DD'),
            index: Number(resumeData?.companyLists[resumeData?.index].index),
            companyListId: Date.now().toString(),
          },
        ],
      };
      reset();
      updateResumeCompany(updateCompanyData);
      // console.log('회사 리스트 수정');
      // const updateCompanyData: CompanyListDto = {
      //   ...data,
      //   date: dayjs().format('YYYY-MM-DD'),
      //   index: Number(resumeId),
      //   companyListId: Date.now().toString(),
      // };
      // reset();
      // updateCompany(updateCompanyData);
    }
    reset(); // 폼 리셋
    console.log('회사 등록함');
    // 모달 닫힘 ? or 계속 등록? 이건 마지막에 하자
  };
  //#endregion

  return (
    <>
      <div className={addCompanyModalCss.wrapCompanyList}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={addCompanyModalCss.formSection}
        >
          <h2>기본정보</h2>
          <Divider />
          <div className={addCompanyModalCss.flex}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="회사명"
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
              id="outlined-multiline-static"
              multiline
              rows={8}
              // label="업무 내용"
              type="text"
              defaultValue={`직위 -\n\n업무 -`}
              error={!!errors.content}
              helperText={errors.content?.message}
              {...register('content', { required: true })}
            />
          </div>
          <button className={addCompanyModalCss.submitButton} type="submit">
            등록
          </button>
        </form>
      </div>
    </>
  );
};
