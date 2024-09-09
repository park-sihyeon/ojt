import { create } from 'zustand';
import { ResumeForm } from '../dto/resume-form-dto';
import { mockGetTest } from '../mock/company-list';

// 수정, 추가, 삭제, getId
interface ResumeStore {
  resumes: ResumeForm[];
  setResumes: (resumes: ResumeForm[]) => void;
  addResume: (resume: ResumeForm) => void;
  updateResume: (updatedResume: ResumeForm) => void;
  deleteResume: (resumeId: string) => void;
  getResumeById: (resumeId: string) => ResumeForm | undefined;
}

export const useResumeStore = create<ResumeStore>((set, get) => ({
  resumes: mockGetTest,
  setResumes: (resumes) => set({ resumes }),
  addResume: (resume) =>
    set((state) => ({ resumes: [...state.resumes, resume] })),
  updateResume: (updatedResume) =>
    set((state) => ({
      resumes: state.resumes.map((resume) =>
        resume.resumeId === updatedResume.resumeId ? updatedResume : resume
      ),
    })),
  deleteResume: (resumeId) =>
    set((state) => ({
      resumes: state.resumes.filter((resume) => resume.resumeId !== resumeId),
    })),
  getResumeById: (resumeId) =>
    get().resumes.find((resume) => resume.resumeId === resumeId),
}));
