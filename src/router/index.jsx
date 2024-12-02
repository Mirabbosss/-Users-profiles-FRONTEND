import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { UserPage } from '../pages/user';
import { FormPage } from '../pages/form';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users/:id',
    element: <UserPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
]);
