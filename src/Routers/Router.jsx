import { createBrowserRouter } from "react-router-dom";
import Index from "../Pages/Index.jsx"
import Login from "../Pages/Login.jsx";
import Basic from "../Pages/Basic.jsx";
import Applicants from "../Pages/Applicants.jsx";
import Recruiters from "../Pages/Recruiters.jsx";
import Register from "../Pages/Register.jsx";
import App from "../App.jsx";
import UserProfile from "../Pages/Usuario.jsx";
export const router = createBrowserRouter([
{
path: "/login", element: <Login/>
},
{
 path: "/Register", element: <Register/>
    },
    {
     path: "/basic", element: <Basic/>
        }
        ,
    {
     path: "/applicants", element: <Applicants/>
        } ,
        {
         path: "/recruiters", element: <Recruiters/>
            }
            ,
        {
         path: "/index", element: <Index/>
            },
            {
             path: "/UserProfile", element: <UserProfile/>
                }
])