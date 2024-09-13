import { create } from 'zustand';
import { CompanyListDto } from '../dto/company-list-dto';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce } from 'immer';
// 수정, 추가, 삭제, getId
interface CompanyStore {
  companys: CompanyListDto[];
  setCompanys: (companys: CompanyListDto[]) => void;
  addCompany: (company: Omit<CompanyListDto, 'companyListId'>) => void; //  사용자가 id와 index를 직접 지정 x
  updateCompany: (updatedCompany: CompanyListDto) => void;
  deleteCompany: (companyListId: string) => void;
  getCompanyById: (companyListId: string) => CompanyListDto | undefined;
  updateCompanyOrder: (companys: CompanyListDto[]) => void;
  isModalOpen: boolean;
  selectedCompanyIndex: number | null;
  closeModal: () => void;
  // test
  companies: { [key: string]: CompanyListDto[] };
  currentResumeKey: string | null;
  resumeKey: string | null;
  openModal: (key: string, resumeKey: string) => void;
  getCompanies: (resumeKey: string) => CompanyListDto[];
  updateCompanyList: (resumeKey: string, companies: CompanyListDto[]) => void;
  updateCompanyListOrder: (
    resumeKey: string,
    companies: CompanyListDto[]
  ) => void;
}

export const useCompanyStore = create<CompanyStore>()(
  persist(
    (set, get) => ({
      companies: {},
      companys: [],
      currentResumeKey: null,
      resumeKey: null,
      isModalOpen: false,
      setCompanys: (companys) => set({ companys }),
      updateCompany: (updatedCompany) =>
        set((state) => ({
          companys: state.companys.map((company) =>
            company.companyListId === updatedCompany.companyListId
              ? updatedCompany
              : company
          ),
        })),
      deleteCompany: (companyListId) =>
        set((state) => {
          const newCompany = state.companys.filter(
            (company) => company.companyListId !== companyListId
          );
          return {
            // 순서 재정렬 ㄱ
            companys: newCompany.map((company, index) => ({
              ...company,
              index,
            })),
          };
        }),
      updateCompanyOrder: (companys) => set({ companys }),
      getCompanyById: (companyListId) =>
        get().companys.find(
          (company) => company.companyListId === companyListId
        ),
      selectedCompanyIndex: null,
      openModal: (key, resumeKey) =>
        set({ isModalOpen: true, currentResumeKey: key, resumeKey: resumeKey }),
      closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
      //
      addCompany: (company) =>
        set(
          produce((state) => {
            const key = company.resumeKey;
            if (key) {
              if (!state.companies[key]) {
                console.log(state.companies[key]);
                state.companies[key] = [];
              }
            }
            state.companies[key].push(company);
          })
        ),
      getCompanies: (resumeKey) => get().companies[resumeKey] || [],
      updateCompanyList: (resumeKey, companies) =>
        set(
          produce((state) => {
            state.companies[resumeKey] = companies;
          })
        ),
      updateCompanyListOrder: (resumeKey, companies) =>
        set(
          produce((state) => {
            if (state.companies[resumeKey]) {
              // 기존 배열을 새로운 순서로 업데이트
              state.companies[resumeKey] = companies.map((company, index) => ({
                ...company,
                index,
              }));
            }
          })
        ),
    }),
    {
      name: 'company-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
