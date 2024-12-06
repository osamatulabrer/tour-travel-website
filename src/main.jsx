
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/pages/Layout.jsx'
import NoPage from './assets/pages/NoPage.jsx'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Blog from './assets/pages/Blog.jsx'
import PlaceRoutes from './assets/pages/PlaceRoutes.jsx'
import BlogsDetails from './assets/pages/BlogsDetails.jsx'



const router = createBrowserRouter( [
  {
    path:'/',
    element: <Layout/>,
    errorElement:<NoPage/>,
    children:
    [{
      path:'/',
      element:<Home/>,
      
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Blog',
      element:<Blog/>,
    },
    {
      path:'/PlaceRoutes',
      element:<PlaceRoutes/>
   

    },
    {
      path:'/BlogsDetails',
      element:<BlogsDetails/>
    },
  ]
  }
])

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>

)
