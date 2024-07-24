import React from 'react';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import MainLayout from './Layout/MainLayout';
import Addjobs,{jobLoader} from './pages/Addjobs';

const router=createBrowserRouter(
  createRoutesFromElements(
    //Layout wraps other components
  <Route path='/' element={<MainLayout />}>  
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<Addjobs />} loader={jobLoader} />
    <Route path='*' element={<NotFound />} />  
  {/* To get not found it page doesnt exist */}

  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
