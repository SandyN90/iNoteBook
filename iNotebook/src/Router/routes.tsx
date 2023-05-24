import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Services from '../components/Services'
import Contact from '../components/Contact'
import MyProfile from '../components/MyProfile'
import AboutUs from '../components/AboutUs'
import HomePage from '../components/HomePage'

const router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/>
   }, 
   {
      path: "/aboutus",
      element: <AboutUs/>
   }
   ,{
      path: "/services",
      element: <Services/>
     }, 
     {
        path: "/contact",
        element: <Contact/>
     },
     {
      path: "/profile",
      element: <MyProfile/>
   }
]);

export default router;