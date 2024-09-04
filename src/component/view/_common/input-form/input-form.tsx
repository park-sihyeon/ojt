// 요걸 기반으로 폼 작성
// 일단 다 넣어놔바

import {
  // Controller,
  // SubmitHandler,
  useForm,
} from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useState } from 'react';
import { inputFormCss } from './input-form.css';
import { Link, useNavigate } from 'react-router-dom';
import { ResumeForm } from '../../../../script/dto/input-form-dto';
import React from 'react';
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import CompanyListContainer from '../_test/company-list/company-list-container';
import dayjs from 'dayjs';

// 정규식 이메일, 전화번호
// const PhoneReg = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/);

// export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

// const InputsSchema = z.object({
//   name: z.string().min(1, '이름을 입력해주세요'),
//   email: z
//     .string()
//     .min(1, '이메일을 입력해주세요')
//     // .nonempty("이메일을 입력해주세요") // 이제 지원 안한다고 함 ㅠ
//     .email('이메일 형식에 맞지 않습니다'),
//   // .regex(PhoneReg, '전화번호를 입력해주세요'),
//   address: z.string().min(1, '주소를 입력해주세요'),
//   phoneNumber: z
//     .string()
//     .min(1, '전화번호를 입력해주세요')
//     .regex(PhoneReg, '전화번호 형식에 맞지 않습니다'),
// });
// or rules option으로 각각의 register('')에서 관리 가능

interface ResumeFormProps {
  onResumeSaved: (resumeForm: ResumeForm) => void;
}

export const InputForm: React.FC<ResumeFormProps> = ({ onResumeSaved }) => {
  const {
    reset,
    register,
    handleSubmit, // 자동으로 event.preventDefault()를 호출 및 리프레시 막고 유효성 검사
    // control,
    // watch, // 입력 여부 확인
  } = useForm<ResumeForm>();
  const [gender, setGender] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/resume');
  };

  // const onSubmit = (data: ResumeForm) => {
  //   onResumeSaved({ ...data });
  //   reset(); // 폼 리셋
  //   handleNavigate();
  //   console.log('등록함');
  // };
  const onSubmit = (data: ResumeForm) => {
    const currentTime = dayjs().format('YYYY-MM-DD'); // 현재 시간 가져오기
    // const toString = currentTime.toString(); // 이거 개짜친다 ㄷㄷ
    onResumeSaved({ ...data, gender, date: currentTime }); // 폼 데이터와 함께 성별 및 타임스탬프 전달
    reset(); // 폼 리셋
    handleNavigate(); // 다른 페이지로 이동
    console.log('등록함');
  };

  // const nowDate = Date.now();

  return (
    <>
      <div className={inputFormCss.height100}>
        <form
          className={inputFormCss.wrapInputFormCss}
          onSubmit={handleSubmit(onSubmit)}
        >
          <b>기본정보</b>
          <Divider />
          {/* <input type="text" {...register('id', { required: true })} /> */}
          <div className={inputFormCss.row}>
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
          <TextField
            required
            id="outlined-required"
            label="전화번호"
            type="tel"
            {...register('phoneNumber', { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="이메일"
            type="email"
            {...register('email', { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="주소"
            type="text"
            {...register('address', { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="내용을 입력해주세요"
            type="text"
            {...register('textarea', { required: true })}
          />
          {/* controller 사용 테스트 */}
          {/* <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value, ...field }, formState }) => {
              return (
                <div>
                  <input
                    placeholder="너의 이름은?"
                    type="name"
                    {...field}
                    value={value}
                    onChange={onChange}
                  />
                  {formState?.errors?.name?.message && (
                    <p>{formState?.errors?.name?.message}</p>
                  )}
                </div>
              );
            }}
          /> */}
          {/* NAVIGATION */}
          <b className={inputFormCss.maginTop}>경력</b>
          <Divider />
          <div>
            <div>회사</div>
            <CompanyListContainer />
          </div>
          <div>
            <div>프로젝트</div>
          </div>

          <Link to="/" className={inputFormCss.goBack}>
            <p>HOME</p>
          </Link>
          <button className={inputFormCss.submitButton} type="submit">
            저장
          </button>
        </form>
      </div>
    </>
  );
};
