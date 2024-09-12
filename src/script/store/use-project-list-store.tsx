import { create } from 'zustand';
import { ProjectListDto } from '../dto/project-list-dto';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce } from 'immer';
// 수정, 추가, 삭제, getId
interface ProjectStore {
  projects: ProjectListDto[];
  setProjects: (projects: ProjectListDto[]) => void;
  addProject: (project: Omit<ProjectListDto, 'projectListId'>) => void; //  사용자가 id와 index를 직접 지정 x
  updateProject: (updatedProject: ProjectListDto) => void;
  deleteProject: (projectListId: string) => void;
  getProjectById: (projectListId: string) => ProjectListDto | undefined;
  updateProjectOrder: (projects: ProjectListDto[]) => void;
  isModalOpen: boolean;
  selectedProjectIndex: number | null;
  closeModal: () => void;
  // test
  projectes: { [key: string]: ProjectListDto[] };
  currentResumeKey: string | null;
  resumeKey: string | null;
  openModal: (key: string, resumeKey: string) => void;
  getProjectes: (resumeKey: string) => ProjectListDto[];
  updateProjectList: (resumeKey: string, projectes: ProjectListDto[]) => void;
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set, get) => ({
      projectes: {},
      projects: [],
      currentResumeKey: null,
      resumeKey: null,
      isModalOpen: false,
      setProjects: (projects) => set({ projects }),
      updateProject: (updatedProject) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.projectListId === updatedProject.projectListId
              ? updatedProject
              : project
          ),
        })),
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
      updateProjectOrder: (projects) => set({ projects }),
      getProjectById: (projectListId) =>
        get().projects.find(
          (project) => project.projectListId === projectListId
        ),
      selectedProjectIndex: null,
      openModal: (key, resumeKey) =>
        set({ isModalOpen: true, currentResumeKey: key, resumeKey: resumeKey }),
      closeModal: () => set({ isModalOpen: false, currentResumeKey: null }),
      //
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
      getProjectes: (resumeKey) => get().projectes[resumeKey] || [],
      updateProjectList: (resumeKey, projectes) =>
        set(
          produce((state) => {
            state.projectes[resumeKey] = projectes;
          })
        ),
    }),
    {
      name: 'project-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
