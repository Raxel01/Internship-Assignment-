import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom" ;
import OutofRouter from './Components/OutofRouter.jsx';
import ShowTasks from './Components/ShowTasks.jsx';
import AddTask from './Components/AddTask.jsx';
import { StatesContextProvider } from './hooks/MainHooks.jsx';

const router = createBrowserRouter([
  {
    element : <StatesContextProvider> <App/> </StatesContextProvider> ,
    errorElement : <OutofRouter/>,
    children : [
      {
        path    : '/',
        element : <AddTask/>
      },
      {
        path    : '/addtask',
        element : <AddTask/>
      },
      {
        path    : '/showtasks',
        element : <ShowTasks/>
      }

    ]

  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
