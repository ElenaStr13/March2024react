import * as ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import RegPage from "./pages/RegPage";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>error!</h1>,
        children: [
            {
                 index: true, element: <AuthPage/>
            },
            {
                 path: '/registration', element: <RegPage/>
            }
        ]

    }
]);
root.render(
    <RouterProvider router={router}/>
);