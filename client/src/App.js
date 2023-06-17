import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Components */
import Username from "./components/Username"
import Password from "./components/Password"
import Reset from "./components/Reset"
import Register from "./components/Register"
import Recovery from "./components/Recovery"
import Profile from "./components/Profile"
import PageNotFound from "./components/PageNotFound"

/** Routes */
const router = createBrowserRouter([
    {
        path : "/",
        element : <div>Homepage</div>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path : "/login",
        element : <Username/>
    },
    {
        path: "/password",
        element: <Password/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/reset",
        element: <Reset/>
    },
    {
        path: "/recovery",
        element: <Recovery/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
])

export default function App() {

    return (
            <main>
                <RouterProvider router={router}></RouterProvider>
            </main>
    )

}