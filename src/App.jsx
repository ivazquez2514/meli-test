import Header from './layout/Header';
import {
  List,
} from './pages';
import {
  Breadcrumb,
} from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  }
])

function App() {
  return (
    <main className="App">
      <Header />
      <div className="main-container">
        <Breadcrumb items={['Text 1', 'Text 2', 'Text 3', 'Text 4']} />
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
