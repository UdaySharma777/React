import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Github,{githubInfoLoader} from './components/github/github.jsx'
import User from './components/User/user.jsx'
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About /> 
//     },
//     {
//       path:'contact',
//       element:<Contact />
//     }

//   ]

// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
