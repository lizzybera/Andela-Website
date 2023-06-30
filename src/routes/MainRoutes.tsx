import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import LayOut from '../components/block/LayOut'
import LandingPage from '../Pages/LandingPage'
import ForTechnical from '../Pages/ForTechnical'
import Enterprises from '../Pages/Enterprises'

export const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element: <LayOut />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: '/tech',
                element: <ForTechnical />
            },
            {
                path: '/enterprise',
                element: <Enterprises />
            }
        ]
    }
])