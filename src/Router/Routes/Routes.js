import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login/Login"
import Registration from "../../Pages/Login/Registration/Registration"
import MyReview from "../../Pages/MyReview/MyReview/MyReview"
import ReviewEdit from "../../Pages/MyReview/ReviewEdit/ReviewEdit"
import NotFound from "../../Pages/NotFound/NotFound"
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails/ServiceDetails"
import ServiceCreate from "../../Pages/Services/ServiceCreate"
import Services from "../../Pages/Services/Services"
import PrivateRoute from "../PrivateRoute/PrivateRoute"


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
                path: '/servicesCreate/',
                element: <PrivateRoute><ServiceCreate></ServiceCreate></PrivateRoute>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://adental-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/review/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://adental-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/review/edit/:id',
                element: <PrivateRoute><ReviewEdit></ReviewEdit></PrivateRoute>,
                loader: ({ params }) => fetch(`https://adental-server.vercel.app/reviews/${params.id}`)
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