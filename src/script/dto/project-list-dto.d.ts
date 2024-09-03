export namespace ProjectListDto {
  export interface ProjectContent {
    order: number; // 키워드 넘버
    title: string; // 프로젝트명
    date: string; // 기간
    description: string; // 설명
    url: string; // 프로젝트 링크 or git 링크
    imageUrl: string; // 이미지 url
    personCount: number; // 프로젝트 진행 인원
    content: string; // 업무내용
    // 활용기술, 업무성과 등 넣어보고 추가로 ㄱ
  }
  // export interface Project.. {}
}
