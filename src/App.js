import React from 'react';
import HomePage from './pages/Home';
import LayoutPage from './pages/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import ProjectsPage from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
