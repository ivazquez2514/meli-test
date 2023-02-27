import { useContext } from 'react';
import Header from './layout/Header';
import {
  List,
  Detail
} from './pages';
import {
  Breadcrumb,
  Loader,
} from './components';
import { ApiContext } from './context/api';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/items" />
  },
  {
    path: '/items',
    children: [
      {
        path: '',
        element: <List />,
      },
      {
        path: ':productId',
        element: <Detail />,
      },
    ]
  },
])

function App() {
  const { categories } = useContext(ApiContext);

  // console.log(isLoading);

  return (
    <main className="App">
      <Header />
      <div className="main-container">
        <Breadcrumb items={categories} />
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
