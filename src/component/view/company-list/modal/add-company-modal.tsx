import dayjs from 'dayjs';
import { Divider, TextField } from '@mui/material';
import { CompanyListDto } from '../../../../script/dto/company-list-dto';
import { useForm } from 'react-hook-form';
import { addCompanyModalCss } from './add-company-modal.css';

interface CompanyListDtoProps {
  onCompanyListSaved: (companyListDto: CompanyListDto) => void;
}

export const AddCompanyModal: React.FC<CompanyListDtoProps> = ({
  onCompanyListSaved,
}) => {
  //#region handle onsubmit
  const { reset, register, handleSubmit } = useForm<CompanyListDto>();
  const onSubmit = (data: CompanyListDto) => {
    const currentTime = dayjs().format('YYYY-MM-DD'); // 현재 시간 가져오기
    onCompanyListSaved({ ...data, date: currentTime }); // 폼 데이터와 함께 성별 및 타임스탬프 전달
    reset(); // 폼 리셋
    console.log('회사 등록함');
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
              id="outlined-multiline-static"
              multiline
              rows={8}
              // label="업무 내용"
              type="text"
              defaultValue={`직위 -
                
업무 -
                `}
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
