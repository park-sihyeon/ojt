// import { zodResolver } from '@hookform/resolvers/zod';
// import { TextField } from '@mui/material';
// import React, { BaseSyntheticEvent } from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// //#region handle zod
// export type InputsSchemaType = z.infer<typeof InputsSchema>; // 타입 추론 자동

// const InputsSchema = z.object({
//   test: z.string().min(1, '테스트중입니다'),
// });
// //#endregion

// export const InnerTest = () => {
//   const { register, handleSubmit } = useForm<InputsSchemaType>({
//     resolver: zodResolver(InputsSchema),
//   });
//   const onSubmit = (
//     data: InputsSchemaType,
//     // event?: React.FormEvent<HTMLFormElement>
//     event?: BaseSyntheticEvent<object, any, any>
//   ) => {
//     // event?.stopPropagation()
//     // event?.preventDefault()
//     if (event) {
//       event.stopPropagation();
//       event.preventDefault();
//     }

//     console.log(data, '나는 시방 이너여');
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           fullWidth
//           required
//           id="outlined-required"
//           label="테슷으"
//           type="text"
//           {...register('test', { required: true })}
//         />
//         <button type="submit">확인</button>
//       </form>
//     </div>
//   );
// };

// export const TestContainer = () => {
//   const { register, handleSubmit } = useForm<InputsSchemaType>({
//     resolver: zodResolver(InputsSchema),
//   });
//   const onSubmit = (data: InputsSchemaType) => {
//     console.log(data, '나는 시방 컨테이너여');
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           fullWidth
//           required
//           id="outlined-required"
//           label="테슷으"
//           type="text"
//           {...register('test', { required: true })}
//         />
//         <InnerTest></InnerTest>
//         <button type="submit">등록</button>
//       </form>
//     </div>
//   );
// };

// modal test

// export const Test = () => {

//   if (selectedCompanyIndex === -1) {
//     // 새로운 회사 추가
//     const newCompanyId = Date.now().toString();
//     const addCompanyData: Omit<CompanyListDto, 'index'> = {
//       ...data,
//       companyListId: newCompanyId,
//       date: dayjs().format('YYYY-MM-DD'),
//     };
//     addCompany(addCompanyData);
//   } else {
//     // 기존 회사 수정
//     const updateCompanyData: CompanyListDto = {
//       ...data,
//       date: dayjs().format('YYYY-MM-DD'),
//       index: selectedCompanyIndex,
//       companyListId: companys[selectedCompanyIndex].companyListId,
//     };
//     updateCompany(updateCompanyData);
//   }
//   reset();
//   closeModal();
//   return (
//     <div>

//     </div>
//   )
//  }

// //#region handle onsubmit
// const onCompanySubmit = (data: InputsSchemaType) => {
//   if (!resumeId) {
//     // 회사 리스트 등록
//     const newCompanyId = Date.now().toString();
//     const addCompanyData: Omit<CompanyListDto, 'index'> = {
//       ...data,
//       companyListId: newCompanyId,
//       date: dayjs().format('YYYY-MM-DD'),
//     };
//     addResumeCompany(addCompanyData);
//     console.log('회사정보 등록 addCompanyData :', addCompanyData);
//     // addCompany(addCompanyData);
//   } else {
//     // 회사 리스트 수정
//     console.log('회사 리스트 수정');
//     const resumeData = getResumeById(resumeId);
//     const updateCompanyData: Omit<
//       ResumeForm,
//       | 'projectLists'
//       | 'title'
//       | 'name'
//       | 'gender'
//       | 'phoneNumber'
//       | 'textarea'
//       | 'email'
//     > = {
//       date: dayjs().format('YYYY-MM-DD'),
//       index: Number(resumeData?.index),
//       resumeId: formatResumeId as string,
//       companyLists: [
//         {
//           ...data,
//           date: dayjs().format('YYYY-MM-DD'),
//           index: Number(resumeData?.companyLists[resumeData?.index].index),
//           companyListId: Date.now().toString(),
//         },
//       ],
//     };
//     console.log('회사정보 수정 updateCompanyData:', updateCompanyData);
//     updateResumeCompany(updateCompanyData);
//   }
//   reset(); // 폼 리셋
//   console.log('회사 등록함');
//   // 모달 닫힘 ? or 계속 등록? 이건 마지막에 하자
// };
// //#endregion

//#region handle onsubmit
// const onCompanySubmit = (data: InputsSchemaType) => {
// if (!resumeId) {
//   // 회사 리스트 등록
//   const newCompanyId = Date.now().toString();
//   const addCompanyData: Omit<CompanyListDto, 'index'> = {
//     ...data,
//     companyListId: newCompanyId,
//     date: dayjs().format('YYYY-MM-DD'),
//   };
//   addCompany(addCompanyData);
//   console.log('회사정보 등록 addCompanyData :', addCompanyData);
//   const test = getCompanyById(newCompanyId);
//   console.log('get 저장된 CompanyList',test)
//   // addCompany(addCompanyData);
// } else {
//   const resumeData = getResumeById(resumeId)
//   // const companyData = getResumeById(resumeId)?.companyLists
//   // 회사 리스트 수정
//   const updateCompanyData: Omit<
//   CompanyListDto,
//     'index'
//   > = {
//     ...data,
//     date: dayjs().format('YYYY-MM-DD'),
//     index: resumeData?.companyLists[].index
//     companyListId: resumeData?.companyLists[].companyListId
//   };
//   console.log('회사정보 수정 updateCompanyData:', updateCompanyData);
//   updateCompany(updateCompanyData);
// }
// reset(); // 폼 리셋
// console.log('회사 등록함');
// // 모달 닫힘 ? or 계속 등록? 이건 마지막에 하자
// };
//#endregion

// 1. modal을 열때 자동으로 해당 이력서등록 페이지 키값을 부여
// 2. 등록한 회사 정보값과 키값을 배열에 저장하고 저장 후 모달 닫힘
// 3. 이력서등록 페이지 키값을 가진 회사리스트 배열이 있을 때 호출
// 4. 해당 이력서등록 페이지 회사 리스트 컴포넌트를 리렌더링

// 1. 페이지로 전환 (라우터, params로 관리)
// 2. 페이지에서 전부 배열 순서 저장하고
// 3. 이력서 등록 페이지에서 불러오기
// 4. PROFIT

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { produce } from 'immer';
// import { CompanyListDto } from '../dto/company-list-dto';

// interface CompanyStore {
//   companies: { [key: string]: CompanyListDto[] };
//   currentResumeKey: string | null;
//   isModalOpen: boolean;
//   openModal: (resumeKey: string) => void;
//   closeModal: () => void;
//   addCompany: (company: CompanyListDto) => void;
//   getCompanies: (resumeKey: string) => CompanyListDto[];
//   updateCompanyList: (resumeKey: string, companies: CompanyListDto[]) => void;
// }

// export const useCompanyStore = create<CompanyStore>()(
//   persist(
//     (set, get) => ({
//       companies: {},
//       currentResumeKey: null,
//       isModalOpen: false,
//       openModal: (resumeKey) => set({ isModalOpen: true, currentResumeKey: resumeKey }),
//       closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
//       addCompany: (company) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             if (!state.companies[key]) {
//               state.companies[key] = [];
//             }
//             state.companies[key].push(company);
//           }
//         })
//       ),
//       getCompanies: (resumeKey) => get().companies[resumeKey] || [],
//       updateCompanyList: (resumeKey, companies) => set(
//         produce((state) => {
//           state.companies[resumeKey] = companies;
//         })
//       ),
//     }),
//     {
//       name: 'company-storage',
//     }
//   )
// );
// const formData = new FormData(event.currentTarget);
// const newCompany: CompanyListDto = {
//   companyListId: Date.now().toString(),
//   title: formData.get('title') as string,
//   url: formData.get('url') as string,
//   content: formData.get('content') as string,
//   period: formData.get('period') as string,
//   date: new Date().toISOString(),
// };

//

// export interface CompanyList {
//   index: number;
//   companyListId: string; // 리스트id
//   title: string; // 회사명
//   date: string; // 등록 시간
//   period: string; // 기간
//   content: string; // 회사 업무
//   url: string; // 회사 링크
//   // 활용기술, 업무성과 등 넣어보고 추가로 ㄱ
// }
// 를 아래와 같이 변경

// export namespace CompanyListDto {
//   export interface CompanyList {
//     index: number;
//     companyListId: string; // 리스트id
//     title: string; // 회사명
//     date: string; // 등록 시간
//     period: string; // 기간
//     content: string; // 회사 업무
//     url: string; // 회사 링크
//     // 활용기술, 업무성과 등 넣어보고 추가로 ㄱ
//   }
//   export interface Keyword {
//     keywordId: number;
//     name: string;
//   }
//   export interface KeywordWithCompanys extends Keyword {
//     list: Array<CompanyListDto.CompanyList>;
//   }
// }

// import { create } from 'zustand';
// import { CompanyListDto } from '../dto/company-list-dto';
// import { createJSONStorage, persist } from 'zustand/middleware';
// import { produce } from 'immer';

// interface CompanyStore {
//   companies: { [key: string]: CompanyListDto.KeywordWithCompanys[] };
//   currentResumeKey: string | null;
//   isModalOpen: boolean;
//   selectedCompanyIndex: number | null;
//   setCompanies: (companies: CompanyListDto.KeywordWithCompanys[]) => void;
//   addCompany: (company: CompanyListDto.CompanyList) => void;
//   updateCompany: (updatedCompany: CompanyListDto.CompanyList) => void;
//   deleteCompany: (companyListId: string) => void;
//   getCompanyById: (companyListId: string) => CompanyListDto.CompanyList | undefined;
//   getCompanyByIndex: (index: number) => CompanyListDto.CompanyList | undefined;
//   updateCompanyOrder: (companies: CompanyListDto.KeywordWithCompanys[]) => void;
//   openModal: (resumeKey: string) => void;
//   closeModal: () => void;
//   getCompanies: (resumeKey: string) => CompanyListDto.KeywordWithCompanys[];
//   updateCompanyList: (resumeKey: string, companies: CompanyListDto.KeywordWithCompanys[]) => void;
// }

// export const useCompanyStore = create<CompanyStore>()(
//   persist(
//     (set, get) => ({
//       companies: {},
//       currentResumeKey: null,
//       isModalOpen: false,
//       selectedCompanyIndex: null,
//       setCompanies: (companies) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             state.companies[key] = companies;
//           }
//         })
//       ),
//       addCompany: (company) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             if (!state.companies[key]) {
//               state.companies[key] = [];
//             }
//             const keywordIndex = state.companies[key].findIndex(k => k.keywordId === company.keywordId);
//             if (keywordIndex > -1) {
//               state.companies[key][keywordIndex].list.push(company);
//             } else {
//               state.companies[key].push({ keywordId: company.keywordId, name: '', list: [company] });
//             }
//           }
//         })
//       ),
//       updateCompany: (updatedCompany) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             state.companies[key] = state.companies[key].map(keyword => ({
//               ...keyword,
//               list: keyword.list.map(company =>
//                 company.companyListId === updatedCompany.companyListId ? updatedCompany : company
//               )
//             }));
//           }
//         })
//       ),
//       deleteCompany: (companyListId) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             state.companies[key] = state.companies[key].map(keyword => ({
//               ...keyword,
//               list: keyword.list.filter(company => company.companyListId !== companyListId)
//             })).filter(keyword => keyword.list.length > 0);
//           }
//         })
//       ),
//       getCompanyById: (companyListId) => {
//         const key = get().currentResumeKey;
//         if (key) {
//           const companies = get().companies[key];
//           for (const keyword of companies) {
//             const company = keyword.list.find(c => c.companyListId === companyListId);
//             if (company) return company;
//           }
//         }
//         return undefined;
//       },
//       getCompanyByIndex: (index) => {
//         const key = get().currentResumeKey;
//         if (key) {
//           const companies = get().companies[key];
//           for (const keyword of companies) {
//             const company = keyword.list.find(c => c.index === index);
//             if (company) return company;
//           }
//         }
//         return undefined;
//       },
//       updateCompanyOrder: (companies) => set(
//         produce((state) => {
//           const key = state.currentResumeKey;
//           if (key) {
//             state.companies[key] = companies;
//           }
//         })
//       ),
//       openModal: (resumeKey) => set({ isModalOpen: true, currentResumeKey: resumeKey }),
//       closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
//       getCompanies: (resumeKey) => get().companies[resumeKey] || [],
//       updateCompanyList: (resumeKey, companies) => set(
//         produce((state) => {
//           state.companies[resumeKey] = companies;
//         })
//       ),
//     }),
//     {
//       name: 'company-list',
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

// interface CompanyListDtoProps {
//   defualtCompany?: CompanyListDto; // 수정 시를 위한 prop
// }

// export const AddCompanyModal: React.FC<CompanyListDtoProps> = ({
//   defualtCompany,
// }) => {
//   const { resumeId } = useParams<{ resumeId: string }>();
//   // const formatResumeId = resumeId?.replace(':', '');

//   //#region handle zod react-hook-form
//   const {
//     reset,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<InputsSchemaType>({
//     defaultValues: defualtCompany, // 수정 하려고 defualtCompany를 기본값으로 설정
//     resolver: zodResolver(InputsSchema),
//   });
//   //#endregion

//   //#region store (useCompanyStore)
//   const {
//     selectedCompanyIndex,
//     closeModal,
//     companys,
//     updateCompany,
//     addCompany,
//     currentResumeKey,
//   } = useCompanyStore();
//   //#endregion

//   return (

//   );
// };
