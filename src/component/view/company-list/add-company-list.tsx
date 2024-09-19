import { Box, Card, Modal } from '@mui/material';
import { addCompanyListCss, addCompanyModalCss } from './add-company-list.css';
import dayjs from 'dayjs';
import { Divider, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCompanyStore } from '../../../script/store/use-company-list-store';
import { CompanyListDto } from '../../../script/dto/company-list-dto';
import { useEffect } from 'react';
//#region handle zod
export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

const InputsSchema = z.object({
  title: z.string().min(1, '회사명을 입력해주세요'),
  url: z.string().min(1, '링크를 걸어주세요'),
  period: z.string().min(1, '기간을 입력해주세요'),
  content: z.string().min(1, '업무 내용을 입력해주세요'),
});
//#endregion
interface AddCompanyListContentPros {
  resumeKey: string;
}
export const AddCompanyListContent: React.FC<AddCompanyListContentPros> = ({
  resumeKey,
}) => {
  //#region useCompanyStore
  const { isModalOpen, openModal, closeModal, addCompany, currentResumeKey } =
    useCompanyStore();
  //#endregion

  //#region handle modal open and key
  const handleModalOpen = () => {
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
    // 수정 시 defualtCompany를 기본값으로 설정
    resolver: zodResolver(InputsSchema),
  });
  //#endregion

  useEffect(() => {
    console.log('add-company-list 키값 :', resumeKey);
  });

  //#region 수정으로 들어올 시 기본값으로 reset 시키기
  // 사용할 수 있으니 보류
  // useEffect(() => {
  //   // 선택한 인덱스 값이 있고 0 이상일때, companylist data가 있으면? 해당 data로 디폴트값으로 리셋
  //   if (selectedCompanyIndex !== null && selectedCompanyIndex >= 0) {
  //     const companyData = companys[selectedCompanyIndex];
  //     if (companyData) {
  //       reset({
  //         title: companyData.title,
  //         url: companyData.url,
  //         content: companyData.content,
  //         period: companyData.period,
  //       });
  //     }
  //   }
  //   console.log(currentResumeKey, 'currentResumeKey 확인');
  // }, [selectedCompanyIndex, companys, reset]);
  //#endregion

  //#region handle onsubmit
  const onCompanySubmit = (data: InputsSchemaType) => {
    // 새로운 회사 추가
    const newCompanyId = Date.now().toString();
    const addCompanyData: CompanyListDto = {
      ...data,
      resumeKey: resumeKey,
      companyListId: newCompanyId,
      date: dayjs().format('YYYY-MM-DD'),
    };
    addCompany(addCompanyData);
    reset();
    closeModal();
  };
  //#endregion

  return (
    <>
      <div className={addCompanyListCss.addCompanyListWrap}>
        <Box className={addCompanyListCss.boxContainer}>
          <Card
            style={{
              minHeight: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={addCompanyListCss.buttonSection}
              onClick={handleModalOpen}
            >
              <div className={addCompanyListCss.addButton}>
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
                }}
              >
                <>
                  <div className={addCompanyModalCss.wrapCompanyList}>
                    <form
                      onSubmit={handleSubmit(onCompanySubmit)}
                      className={addCompanyModalCss.formContainer}
                    >
                      <div className={addCompanyModalCss.inputSection}>
                        <h2>회사정보</h2>
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
                            // defaultValue={`직위 -\n\n업무 -`}
                            error={!!errors.content}
                            helperText={errors.content?.message}
                            {...register('content', { required: true })}
                          />
                        </div>
                      </div>
                      <button
                        className={addCompanyModalCss.submitButton}
                        type="submit"
                      >
                        등록
                      </button>
                    </form>
                  </div>
                </>
              </Box>
            </Modal>
            {/* list */}
          </Card>
        </Box>
      </div>
    </>
  );
};
