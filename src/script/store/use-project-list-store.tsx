import { create } from 'zustand';
import { ProjectListDto } from '../dto/project-list-dto';

// 수정, 추가, 삭제, getId
interface ProjectStore {
  projects: ProjectListDto[];
  setProjects: (projects: ProjectListDto[]) => void;
  addProject: (
    project: Omit<ProjectListDto, 'projectListId' | 'index'>
  ) => void; //  사용자가 id와 index를 직접 지정 x
  updateProject: (updatedProject: ProjectListDto) => void;
  deleteProject: (projectListId: string) => void;
  getProjectById: (projectListId: string) => ProjectListDto | undefined;
  getProjectByIndex: (index: number) => void;
  updateProjectOrder: (projects: ProjectListDto[]) => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  addProject: (project) =>
    set((state) => {
      const newProject = {
        ...project,
        projectListId: Date.now().toString(),
        index: state.projects.length,
      };
      return { projects: [...state.projects, newProject] };
    }),
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
        projects: newProject.map((project, index) => ({ ...project, index })),
      };
    }),
  updateProjectOrder: (projects) => set({ projects }),
  getProjectById: (projectListId) =>
    get().projects.find((project) => project.projectListId === projectListId),
  getProjectByIndex: (index) =>
    get().projects.find((project) => project.index === index),
}));
