export interface ResumeForm {
  resumeKey: string;
  index?: number;
  resumeId: string; //이력서id
  title: string; // 이력서 타이틀
  name: string; // 이름
  gender: string; // 성별
  phoneNumber: string; // 전화번호
  email: string; // 이메일
  address?: string; // 주소
  textarea: string; // 간단 설명(직군, 사용기술 등)
  date: string; // 최종편집일
  // companyLists: CompanyListDto[]; // 회사 리스트
  // projectLists: ProjectListDto[]; // 프로젝트 리스트
}
