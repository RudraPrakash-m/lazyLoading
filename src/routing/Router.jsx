import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import Loader from '../components/loading/Loader'
// import Home from '../pages/home/Home'
// import MainLayout from '../layouts/MainLayout'
// import About from '../pages/about/About'
// import Products from '../pages/products/Products'
// import Contact from '../pages/contact/Contact'

const MainLayout = lazy(() => import('../layouts/MainLayout'))
const Home = lazy(() => import('../pages/home/Home'))
const About = lazy(() => import('../pages/about/About'))
const Products = lazy(() => import('../pages/products/Products'))
const Contact = lazy(() => import('../pages/contact/Contact'))

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }
            ]
        }
    ])
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={routes} />
        </Suspense>)
}

export default Router