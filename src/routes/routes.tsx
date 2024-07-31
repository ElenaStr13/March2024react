import {createBrowserRouter} from "react-router-dom";

import AuthPage from "../pages/AuthPage";
import RegPage from "../pages/RegPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>aaaaaaaa errorrr!</h1>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: '/registration', element: <RegPage/>
            },
            {
                path: '/cars', element: <CarsPage/>
            }
        ]

    }
]);