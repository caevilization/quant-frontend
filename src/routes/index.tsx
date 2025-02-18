import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landing/LandingPage';
import FlowListPage from '../pages/flow/list/FlowListPage';
import FlowEditPage from '../pages/flow/edit/FlowEditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/flows',
    element: <FlowListPage />,
  },
  {
    path: '/flows/edit/:id',
    element: <FlowEditPage />,
  },
  {
    path: '/flows/new',
    element: <FlowEditPage />,
  },
]);
