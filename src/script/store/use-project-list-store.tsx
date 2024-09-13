import { create } from 'zustand';
import { ProjectListDto } from '../dto/project-list-dto';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce } from 'immer';
// 수정, 추가, 삭제, getId
interface ProjectStore {
  projects: ProjectListDto[];
  projectes: { [key: string]: ProjectListDto[] };
  currentResumeKey: string | null;
  resumeKey: string | null;
  isModalOpen: boolean;
  selectedProjectIndex: number | null;
  openModal: (key: string, resumeKey: string) => void;
  closeModal: () => void;
  addProject: (project: Omit<ProjectListDto, 'projectListId'>) => void; //  사용자가 id와 index를 직접 지정 x
  deleteProject: (projectListId: string) => void;
  getProjectById: (projectListId: string) => ProjectListDto | undefined;
  getProjectesByKey: (resumeKey: string) => ProjectListDto[];
  updateProjectList: (resumeKey: string, projectes: ProjectListDto[]) => void;
  updateProjectListOrder: (
    resumeKey: string,
    projectes: ProjectListDto[]
  ) => void;
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set, get) => ({
      projectes: {},
      projects: [],
      currentResumeKey: null,
      resumeKey: null,
      isModalOpen: false,
      selectedProjectIndex: null,
      openModal: (key, resumeKey) =>
        set({ isModalOpen: true, currentResumeKey: key, resumeKey: resumeKey }),
      closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
      deleteProject: (projectListId) =>
        set((state) => {
          const newProject = state.projects.filter(
            (project) => project.projectListId !== projectListId
          );
          return {
            // 순서 재정렬 ㄱ
            projects: newProject.map((project, index) => ({
              ...project,
              index,
            })),
          };
        }),
      getProjectById: (projectListId) =>
        get().projects.find(
          (project) => project.projectListId === projectListId
        ),
      getProjectesByKey: (resumeKey) => get().projectes[resumeKey] || [],
      addProject: (project) =>
        set(
          produce((state) => {
            const key = project.resumeKey;
            if (key) {
              if (!state.projectes[key]) {
                console.log(state.projectes[key]);
                state.projectes[key] = [];
              }
            }
            state.projectes[key].push(project);
          })
        ),
      updateProjectList: (resumeKey, projectes) =>
        set(
          produce((state) => {
            state.projectes[resumeKey] = projectes;
          })
        ),
      updateProjectListOrder: (resumeKey, projectes) => {
        set(
          produce((state) => {
            if (state.projectes[resumeKey]) {
              state.projectes[resumeKey] = projectes.map((project, index) => ({
                ...project,
                index,
              }));
            }
          })
        );
      },
    }),
    {
      name: 'project-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
