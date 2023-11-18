import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Page/home.jsx';
import { Blogs } from './Page/Blogs.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';
import SingleBlog from './Page/SingleBlog.jsx';
import { Member } from './Page/Member.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Add a path value here
        element: <Home/>,
      },
      {
        path: "/blogs",
        element: <Blogs/> // Add a path value here
      },
      {
        path: "/about",
        element: <About/> 
      },
      {
        path: "/contact",
        element: <Contact/> 
      },
      {
        path: "/Member",
        element: <Member/> 
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        loader : ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
