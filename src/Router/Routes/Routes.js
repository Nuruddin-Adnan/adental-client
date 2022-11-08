import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login/Login"
import Registration from "../../Pages/Login/Registration/Registration"
import NotFound from "../../Pages/NotFound/NotFound"
import Services from "../../Pages/Services/Services"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])