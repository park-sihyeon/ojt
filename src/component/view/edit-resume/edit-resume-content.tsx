// 요걸 기반으로 폼 작성
// 일단 다 넣어놔바
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ResumeForm } from '../../../script/dto/resume-form-dto';
import React, { useEffect, useRef } from 'react';
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import CompanyListContainer from '../company-list/company-list-container';
import { editResumeContentCss } from './edit-resume-content.css';
import ProjectListContainer from '../project-list/project-list-container';
import { z } from 'zod';
import { PhoneReg } from '../_common/_core/core-input-formatter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResumeStore } from '../../../script/store/use-resume-store';
import dayjs from 'dayjs';
import { useCompanyStore } from '../../../script/store/use-company-list-store';
import { useProjectStore } from '../../../script/store/use-project-list-store';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { CoreButton } from '../_common/_core/button/core-button';

//#region handle zod
export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

const InputsSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z
    .string()
    .min(1, '이메일을 입력해주세요')
    // .nonempty("이메일을 입력해주세요") // 이제 지원 안한다고 함 ㅠ
    .email('이메일 형식에 맞지 않습니다'),
  address: z.string().min(1, '주소를 입력해주세요'),
  gender: z.string(),
  phoneNumber: z
    .string()
    .min(1, '전화번호를 입력해주세요')
    .regex(PhoneReg, '전화번호 형식에 맞지 않습니다'),
  textarea: z.string().min(1, '포부 및 소개를 입력해주세요'),
});
// or rules option으로 각각의 register('')에서 관리 가능
//#endregion

interface ResumeFormProps {
  onResumeSaved: (resumeForm: ResumeForm) => void;
}

export const EditResumeContent: React.FC<ResumeFormProps> = ({
  onResumeSaved,
}) => {
  const { resumeId } = useParams<{ resumeId: string }>();
  const formatResumeId = resumeId?.replace(':', '');
  const { addResume, updateResume, getResumeById } = useResumeStore();
  const { companys } = useCompanyStore();
  const { projects } = useProjectStore();

  const navigate = useNavigate();

  //#region 랜덤 키 테스트, 커스텀 훅으로 따로 빼야될까?
  const generateRandomKey = (length: number = 10): string => {
    const characters = '0123456789';
    return Array(length)
      .fill('')
      .map(() =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      )
      .join('');
  };
  // useRef로 랜덤 키 저장
  const stableKeyRef = useRef<string | null>(null);

  // 컴포넌트가 마운트될 때 한 번만 실행
  useEffect(() => {
    if (stableKeyRef.current === null) {
      stableKeyRef.current = generateRandomKey();
    }
  }, []);

  const createResumeKey = () => {
    return stableKeyRef.current;
  };
  const resumeKey = createResumeKey();
  console.log(resumeKey);
  //#endregion

  //#region react-hook-form & resolver
  const {
    control,
    register,
    handleSubmit, // 자동으로 event.preventDefault()를 호출 및 리프레시 막고 유효성 검사
    reset,
    formState: { errors },
    // watch, // 입력 여부 확인
  } = useForm<InputsSchemaType>({
    resolver: zodResolver(InputsSchema),
  });
  //#endregion

  const resumeData = getResumeById(formatResumeId as string);

  //#region handle reset 수정 시 해당 이력서 데이터로 리셋
  useEffect(() => {
    if (formatResumeId) {
      const resumeData = getResumeById(formatResumeId);
      console.log('resumeData', resumeData);
      if (resumeData) {
        reset({
          title: resumeData.title,
          name: resumeData.name,
          email: resumeData.email,
          address: resumeData.address,
          phoneNumber: resumeData.phoneNumber,
          textarea: resumeData.textarea,
          gender: resumeData.gender,
        });
      }
    }
  }, [formatResumeId, getResumeById, reset]);
  //#endregion

  //#region handle onsumit
  const onSubmit = (data: InputsSchemaType) => {
    if (!resumeId) {
      const newResumeId = Date.now().toString();
      const addResumeData: Omit<ResumeForm, 'index'> = {
        ...data,
        resumeKey: resumeKey as string,
        date: dayjs().format('YYYY-MM-DD'),
        resumeId: newResumeId,
      };
      addResume(addResumeData);
      navigate(`/resume/${newResumeId}`);
    } else {
      console.log('companys data 확인:', companys);
      console.log('projects data 확인:', projects);

      const updatedResumeData: ResumeForm = {
        ...data,
        resumeKey: resumeData?.resumeKey as string,
        resumeId: formatResumeId as string,
        date: dayjs().format('YYYY-MM-DD'), // 최종편집 일시
        index: Number(resumeData?.index),
      };
      onResumeSaved(updatedResumeData); // 폼 데이터 전달
      updateResume(updatedResumeData);
      navigate(`/resume/${formatResumeId}`);
    }
  };
  //#endregion
  return (
    <>
      <div>
        <form
          className={editResumeContentCss.inputFormSection}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={editResumeContentCss.infoTop}>
            <h2 className="title">기본정보</h2>
            {/* NAVIGATION */}
            <Link to="/" className={editResumeContentCss.goBack}>
              <HomeOutlinedIcon sx={{ color: '#1976d2', fontSize: '30px' }} />
            </Link>
          </div>
          {/* 구분선 */}
          <Divider className={editResumeContentCss.divider} />
          {/* 이력서 타이틀 */}
          <TextField
            required
            id="outlined-required"
            label="이력서 타이틀"
            type="text"
            {...register('title', { required: true })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          {/* 이름, 성별  */}
          <div className={editResumeContentCss.row}>
            <TextField
              required
              id="outlined-required"
              label="이름"
              type="text"
              {...register('name', { required: true })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <FormControl fullWidth>
              <InputLabel id="select-label">성별</InputLabel>
              <Select
                required
                labelId="select-label"
                id="select"
                label="gender"
                {...register('gender', { required: true })}
              >
                <MenuItem value="male">남성</MenuItem>
                <MenuItem value="female">여성</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* 전화번호 */}
          {/* 혹시 변경할지도 모르니 */}
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { ref } }) => {
              return (
                <TextField
                  required
                  id="outlined-required"
                  label="전화번호"
                  type="tel"
                  inputRef={ref}
                  {...register('phoneNumber', { required: true })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              );
            }}
          />
          {/* 이메일 */}
          <TextField
            required
            id="outlined-required"
            label="이메일"
            type="email"
            {...register('email', { required: true })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          {/* 주소 */}
          <TextField
            required
            id="outlined-required"
            label="주소"
            type="text"
            {...register('address', { required: true })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          {/* 포부 및 소개 */}
          <TextField
            // required
            id="outlined-required"
            label="소개 및 포부"
            type="text"
            {...register('textarea', { required: false })}
            error={!!errors.textarea}
            helperText={errors.textarea?.message}
          />
          <CoreButton
            className={editResumeContentCss.submitButton}
            type="submit"
            variant="submit"
          >
            저장
          </CoreButton>
        </form>
        {/* 경력 영역 */}
        <div className={editResumeContentCss.inputFormSection}>
          <b className="title">경력</b>
          <Divider className={editResumeContentCss.divider} />
          {/* 회사 리스트 */}
          <div className="subtitle">회사</div>
          <CompanyListContainer
            resumeKey={
              !resumeId
                ? (resumeKey as string)
                : (resumeData?.resumeKey as string)
            }
          />
          <Divider className={editResumeContentCss.divider} />
          {/* 프로젝트 리스트 */}
          <div className="subtitle">프로젝트</div>
          <ProjectListContainer
            resumeKey={
              !resumeId
                ? (resumeKey as string)
                : (resumeData?.resumeKey as string)
            }
          />
        </div>
      </div>
    </>
  );
};
