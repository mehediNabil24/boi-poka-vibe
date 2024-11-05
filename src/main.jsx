import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home.jsx';
import DashBoard from './Components/DashBoard.jsx';
import BookDetails from './Components/BookDetails.jsx';
import ReadList from './Components/ReadList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/booksData.json')

      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>

      },
      {
        path: '/ReadList',
        element: <ReadList></ReadList>,
        loader:()=> fetch('/booksData.json')
      }

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)


