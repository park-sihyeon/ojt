import dayjs from 'dayjs';
import { Divider, TextField } from '@mui/material';
import { CompanyListDto } from '../../../../script/dto/company-list-dto';
import { useForm } from 'react-hook-form';
import { addCompanyModalCss } from './add-company-modal.css';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCompanyStore } from '../../../../script/store/use-company-list-store';

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
  // const { resumeId } = useParams<{ resumeId: string }>();
  // const formatResumeId = resumeId?.replace(':', '');

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

  //#region store (useCompanyStore)
  const {
    selectedCompanyIndex,
    closeModal,
    companys,
    updateCompany,
    addCompany,
    currentResumeKey,
  } = useCompanyStore();
  //#endregion

  //#region 수정으로 들어올 시 기본값으로 reset 시키기
  useEffect(() => {
    // 선택한 인덱스 값이 있고 0 이상일때, companylist data가 있으면? 해당 data로 디폴트값으로 리셋
    if (selectedCompanyIndex !== null && selectedCompanyIndex >= 0) {
      const companyData = companys[selectedCompanyIndex];
      if (companyData) {
        reset({
          title: companyData.title,
          url: companyData.url,
          content: companyData.content,
          period: companyData.period,
        });
      }
    }
  }, [selectedCompanyIndex, companys, reset]);
  //#endregion

  //#region handle onsubmit
  const onCompanySubmit = (data: InputsSchemaType) => {
    if (selectedCompanyIndex === -1) {
      // 새로운 회사 추가
      const getCompanyList = localStorage.getItem('test');
      const newCompanyId = Date.now().toString();
      const addCompanyData: CompanyListDto = {
        ...data,
        index: getCompanyList ? getCompanyList.length : 0,
        companyListId: newCompanyId,
        date: dayjs().format('YYYY-MM-DD'),
      };
      addCompany(addCompanyData);
      console.log('회사 리스트 추가', addCompanyData);
    } else {
      // 기존 회사 수정
      const updateCompanyData: CompanyListDto = {
        ...data,
        date: dayjs().format('YYYY-MM-DD'),
        index: selectedCompanyIndex as number,
        companyListId: companys[selectedCompanyIndex as number].companyListId,
      };
      updateCompany(updateCompanyData);
    }
    reset();
    closeModal();
  };
  //#endregion

  return (
    <>
      <div className={addCompanyModalCss.wrapCompanyList}>
        <form
          onSubmit={handleSubmit(onCompanySubmit)}
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
