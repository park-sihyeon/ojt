import { RouteObject } from 'react-router-dom';

import { Resume } from '../../component/view/_common/_test/resume/resume';
import { HomeContainer } from '../../component/view/home/home-container';

export const commonRoutes: ReadonlyArray<RouteObject> = [
  {
    path: '/',
    element: <HomeContainer />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
];
