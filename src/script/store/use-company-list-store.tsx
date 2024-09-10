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
  getCompanyByIndex: (index: number) => void;
  updateCompanyOrder: (companys: CompanyListDto[]) => void;
  isModalOpen: boolean;
  selectedCompanyIndex: number | null;
  closeModal: () => void;
  // test
  companies: { [key: string]: CompanyListDto[] };
  currentResumeKey: string | null;
  openModal: (resumeKey: string) => void;
  getCompanies: (resumeKey: string) => CompanyListDto[];
  updateCompanyList: (resumeKey: string, companies: CompanyListDto[]) => void;
}

export const useCompanyStore = create<CompanyStore>()(
  persist(
    (set, get) => ({
      companies: {},
      companys: [],
      currentResumeKey: null,
      isModalOpen: false,
      setCompanys: (companys) => set({ companys }),
      // addCompany: (company) =>
      //   set((state) => {
      //     const newCompany = {
      //       ...company,
      //       companyListId: Date.now().toString(),
      //     };
      //     return { companys: [...state.companys, newCompany] };
      //   }),

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
      getCompanyByIndex: (index) =>
        get().companys.find((company) => company.index === index),
      selectedCompanyIndex: null,
      openModal: (resumeKey) =>
        set({ isModalOpen: true, currentResumeKey: resumeKey }),
      closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
      addCompany: (company) =>
        set(
          produce((state) => {
            const key = state.currentResumeKey;
            if (key) {
              if (!state.companies[key]) {
                state.companies[key] = [];
              }
              state.companies[key].push(company);
            }
          })
        ),
      getCompanies: (resumeKey) => get().companies[resumeKey] || [],
      updateCompanyList: (resumeKey, companies) =>
        set(
          produce((state) => {
            state.companies[resumeKey] = companies;
          })
        ),
    }),
    {
      name: 'company-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
