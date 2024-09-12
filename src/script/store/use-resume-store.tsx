import { create } from 'zustand';
import { ResumeForm } from '../dto/resume-form-dto';
import { CompanyListDto } from '../dto/company-list-dto';
import { ProjectListDto } from '../dto/project-list-dto';
import { createJSONStorage, persist } from 'zustand/middleware';

// 수정, 추가, 삭제, getId
interface ResumeStore {
  resumes: ResumeForm[];
  companys: CompanyListDto[];
  projects: ProjectListDto[];
  setResumes: (resumes: ResumeForm[]) => void;
  addResume: (resume: Omit<ResumeForm, 'index'>) => void; //  사용자가 id와 index를 직접 지정 x
  updateResume: (updatedResume: ResumeForm) => void;
  deleteResume: (resumeId: string) => void;
  getResumeById: (resumeId: string) => ResumeForm | undefined;
  getResumeByIndex: (index: number) => void;
  updateResumeOrder: (resumes: ResumeForm[]) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      resumes: [],
      companys: [],
      projects: [],
      setResumes: (resumes) => set({ resumes }),
      addResume: (resume) =>
        set((state) => {
          const newResume = {
            ...resume,
            index: state.resumes.length,
            companyLists: [],
            projectLists: [],
          };
          return { resumes: [...state.resumes, newResume] };
        }),
      updateResume: (updatedResume) =>
        set((state) => ({
          resumes: state.resumes.map((resume) =>
            resume.resumeId === updatedResume.resumeId ? updatedResume : resume
          ),
        })),
      deleteResume: (resumeId) =>
        set((state) => {
          const newResume = state.resumes.filter(
            (resume) => resume.resumeId !== resumeId
          );
          return {
            // 순서 재정렬 ㄱ
            resumes: newResume.map((resume, index) => ({ ...resume, index })),
          };
        }),
      updateResumeOrder: (resumes) => set({ resumes }),
      getResumeById: (resumeId) =>
        get().resumes.find((resume) => resume.resumeId === resumeId),
      getResumeByIndex: (index) =>
        get().resumes.find((resume) => resume.index === index),
    }),
    {
      name: 'resume',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
