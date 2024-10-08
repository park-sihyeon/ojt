import { HomeContainer } from '../../component/view/home/home-container';
import { AppContent } from '../../component/app-content';
import { Resume } from '../../component/view/resume/resume';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { EditResumeContainer } from '../../component/view/edit-resume/edit-resume-container';

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <HomeContainer />,
  },
  {
    path: '/resume/:resumeId?',
    element: <Resume />,
  },
  {
    path: '/edit-resume/:resumeId?',
    element: <EditResumeContainer />,
  },
];

export const router = createBrowserRouter([
  {
    Component: AppContent,
    children: routes.map((route) => {
      return route;
    }),
  },
]);
