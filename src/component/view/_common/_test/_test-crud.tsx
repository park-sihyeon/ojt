import React, { useState } from 'react';
import { mockGetTest } from '../../../../script/mock/company-list';
import { CompanyListDto } from '../../../../script/dto/company-list-dto';
import { ProjectListDto } from '../../../../script/dto/project-list-dto';

interface ResumeForm {
  resumeId: number; //이력서id
  title: string; // 이력서 타이틀
  name: string; // 이름
  gender: string; // 성별
  phoneNumber: string; // 전화번호
  email: string; // 이메일
  address?: string; // 주소
  textarea: string; // 간단 설명(직군, 사용기술 등)
  date: string; // 최종편집일
  companyLists: CompanyListDto[]; // 회사 리스트
  projectLists: ProjectListDto[]; // 프로젝트 리스트
}

const ResumeManager: React.FC = () => {
  const [resumeForms, setResumeForms] =
    useState<typeof mockGetTest>(mockGetTest);

  // 새 이력서 추가
  const addResumeForm = (newForm: ResumeForm) => {
    setResumeForms([...resumeForms, newForm]);
  };

  // 이력서 삭제
  const deleteResumeForm = (resumeId: number) => {
    setResumeForms(resumeForms.filter((form) => form.resumeId !== resumeId));
  };

  // 이력서 수정
  const updateResumeForm = (updatedForm: ResumeForm) => {
    setResumeForms(
      resumeForms.map((form) =>
        form.resumeId === updatedForm.resumeId ? updatedForm : form
      )
    );
  };

  return (
    <div>
      {resumeForms.map((form) => (
        <div key={form.resumeId}>
          <h2>{form.title}</h2>
          <button onClick={() => deleteResumeForm(form.resumeId)}>삭제</button>
          <button onClick={() => updateResumeForm(form)}>수정</button>
          {/* 수정 버튼 및 기능 구현 */}
        </div>
      ))}
      {/* 새 이력서 추가 폼 */}
      {/* <button onClick={() => addResumeForm()}>수정</button> */}
    </div>
  );
};

export default ResumeManager;
