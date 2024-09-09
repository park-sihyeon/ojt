// 요걸 기반으로 폼 작성
// 일단 다 넣어놔바
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ResumeForm } from '../../../script/dto/resume-form-dto';
import React, { useState } from 'react';
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import CompanyListContainer from '../company-list/company-list-container';
import dayjs from 'dayjs';
import { editResumeContentCss } from './edit-resume-content.css';
import ProjectListContainer from '../project-list/project-list-container';
import { z } from 'zod';
import { PhoneReg } from '../_common/_core/core-input-formatter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResumeStore } from '../../../script/store/use-resume-store';

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
  //#region handle zod react-hook-form
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

  const [gender, setGender] = React.useState('');

  //#region navigate 수정해해해해해ㅐㅎ잇
  const navigate = useNavigate();
  const goToResumeNavigate = () => {
    // id 값 비교해서 ㄱ
    navigate('/resume');
  };
  //#endregion

  //#region handle change value
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  //#endregion

  //#region createResumeId
  // 너 이렇게 할꺼임? ㄹㅇ?
  const [resumeForms, setResumeForms] = useState<ResumeForm[]>([]);
  const { resumeId } = useParams<{ resumeId: string }>();
  // console.log('resumeId 아이디', resumeId);
  const { getResumeById } = useResumeStore();
  const Formatting = resumeId?.replace(':', '');
  const resume = getResumeById(Formatting as string);
  const createResumeId = () => {
    if (!resumeId) {
      // resumeId 없을 때(새 이력서 추가)
      // resumeId 있을 때(이력서 수정)
      // resumeId가 없고 resumeForms가 없을 때 createResumeId = 1
      return !resumeForms ? '1' : (resumeForms.length + 1).toString();
    } else {
      return resume;
    }
  };
  //#endregion

  //#region handle onSumit
  const onSubmit = (data: InputsSchemaType) => {
    const currentTime = dayjs().format('YYYY-MM-DD'); // 현재 시간 가져오기
    const resumeForm: ResumeForm = {
      ...data,
      resumeId: createResumeId(), // ID 생성?
      gender,
      date: currentTime,
      companyLists: [], // 회사 list 데이Eㅏ
      projectLists: [], // 프로젝트 list 데이Eㅏ
    };
    onResumeSaved(resumeForm); // 폼 데이터와 함께 성별 및 타임스탬프 전달
    reset();
    goToResumeNavigate();
    console.log('등록함');
  };
  //#endregion
  return (
    <>
      <div className={editResumeContentCss.height100}>
        <form
          className={editResumeContentCss.wrapInputFormCss}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>기본정보</h2>
          {/* 구분선 */}
          <Divider />
          {/* 이력서 타이틀 */}
          <TextField
            required
            id="outlined-required"
            label="이력서 타이틀"
            type="text"
            {...register('title', { required: true })}
          />
          {/* 이름, 성별  */}
          <div className={editResumeContentCss.row}>
            <TextField
              required
              id="outlined-required"
              label="이름"
              type="text"
              {...register('name', { required: true })}
            />
            <FormControl fullWidth>
              <InputLabel id="select-label">성별</InputLabel>
              <Select
                required
                labelId="select-label"
                id="select"
                value={gender}
                label="gender"
                onChange={handleChange}
              >
                <MenuItem value="male">남성</MenuItem>
                <MenuItem value="female">여성</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* 전화번호 */}

          {/* controller 사용 테스트 */}
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
                  // error={Boolean(errors.text)} // 에러 메세지 처리는 적용 이후에..
                  // helperText={errors.text?.message}
                  inputRef={ref}
                  {...register('phoneNumber', { required: true })}
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
          />
          {/* 주소 */}
          <TextField
            required
            id="outlined-required"
            label="주소"
            type="text"
            {...register('address', { required: true })}
          />
          {/* 포부 및 소개 */}
          <TextField
            // required
            id="outlined-required"
            label="소개 및 포부"
            type="text"
            {...register('textarea', { required: false })}
          />
          {/* NAVIGATION */}
          <b>경력</b>
          <Divider />
          <div>
            <div>회사</div>
            <CompanyListContainer />
          </div>
          <div>
            <div>프로젝트</div>
            <ProjectListContainer />
          </div>

          <Link to="/" className={editResumeContentCss.goBack}>
            <p>HOME</p>
          </Link>
          <button className={editResumeContentCss.submitButton} type="submit">
            저장
          </button>
        </form>
      </div>
    </>
  );
};
