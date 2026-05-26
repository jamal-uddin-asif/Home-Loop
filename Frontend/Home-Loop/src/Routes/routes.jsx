import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/RooteLayout/Home";
import Feed from "../Pages/RooteLayout/Feed";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            { 
                path: '/feed',
                component: Feed
            }
           
        ]
    }
])
