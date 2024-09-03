import { ProjectListDto } from './project-list-dto';

export namespace ProjectListDtoResponse {
  export type GetProjectList = ProjectListDto.DetailContent;

  export interface GetProjectPerKeywords {
    listCount: number;
    keywords: Array<>;
  }
  // export interface GetProductsPerKeywords {
  //   productCount: number;
  //   keywords: Array<StoreDto.KeywordWithProducts>;
  // }
}
