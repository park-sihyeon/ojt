import { create } from 'zustand';
import { CompanyListDto } from '../dto/company-list-dto';
import { ResumeForm } from '../dto/resume-form-dto';

// 수정, 추가, 삭제, getId
interface CompanyStore {
  resumes: ResumeForm[];
  companys: CompanyListDto[];
  setCompanys: (companys: CompanyListDto[]) => void;
  addCompany: (
    company: Omit<CompanyListDto, 'companyListId' | 'index'>
  ) => void; //  사용자가 id와 index를 직접 지정 x
  updateCompany: (updatedCompany: CompanyListDto) => void;
  deleteCompany: (companyListId: string) => void;
  getCompanyById: (companyListId: string) => CompanyListDto | undefined;
  getCompanyByIndex: (index: number) => void;
  updateCompanyOrder: (companys: CompanyListDto[]) => void;
}

export const useCompanyStore = create<CompanyStore>((set, get) => ({
  resumes: [],
  companys: [],
  setCompanys: (companys) => set({ companys }),
  addCompany: (company) =>
    set((state) => {
      const newCompany = {
        ...company,
        companyListId: Date.now().toString(),
        index: state.companys.length,
      };
      return { companys: [...state.companys, newCompany] };
    }),

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
        companys: newCompany.map((company, index) => ({ ...company, index })),
      };
    }),
  updateCompanyOrder: (companys) => set({ companys }),
  getCompanyById: (companyListId) =>
    get().companys.find((company) => company.companyListId === companyListId),
  getCompanyByIndex: (index) =>
    get().companys.find((company) => company.index === index),
}));
