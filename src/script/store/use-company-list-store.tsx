import { create } from 'zustand';
import { CompanyListDto } from '../dto/company-list-dto';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce } from 'immer';
// 수정, 추가, 삭제, getId
interface CompanyStore {
  companys: CompanyListDto[];
  companies: { [key: string]: CompanyListDto[] };
  currentResumeKey: string | null;
  resumeKey: string | null;
  isModalOpen: boolean;
  selectedCompanyIndex: number | null;
  openModal: (key: string, resumeKey: string) => void;
  closeModal: () => void;
  addCompany: (company: Omit<CompanyListDto, 'companyListId'>) => void; //  사용자가 id와 index를 직접 지정 x
  deleteCompany: (companyListId: string) => void;
  getCompanyById: (companyListId: string) => CompanyListDto | undefined;
  getCompaniesByKey: (resumeKey: string) => CompanyListDto[];
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
                state.companies[key] = [];
              }
            }
            state.companies[key].push(company);
          })
        ),
      deleteCompany: (companyListId) =>
        set((state) => {
          const newCompany = state.companys.filter(
            (company) => company.companyListId !== companyListId
          );
          return {
            companys: newCompany.map((company, index) => ({
              ...company,
              index,
            })),
          };
        }),
      getCompanyById: (companyListId) =>
        get().companys.find(
          (company) => company.companyListId === companyListId
        ),

      getCompaniesByKey: (resumeKey) => get().companies[resumeKey] || [],
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
