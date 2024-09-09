export interface ProjectListDto {
  projectListId: string; // 프로젝트id
  title: string; // 프로젝트명
  period: string; // 기간
  personCount?: number; // 프로젝트 진행 인원
  description: string; // 프로젝트 간단설명
  content: string; // 업무내용
  url?: string; // 프로젝트 링크 or git 링크
  imageUrl?: string;
  // 활용기술, 업무성과 등 넣어보고 추가로 ㄱ
}
