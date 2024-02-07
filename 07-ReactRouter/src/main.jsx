import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/about/about'
import Contact from './components/contact/Contact'
import Layout from './layout'
import User from './components/user/User'
import Github, { githubInfoLoader } from './components/github/GIthub'


// const route=
//   createBrowserRouter([
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:'',
//           element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       },
//       ]
//   }
//   ])

const route=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
