import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/Mainlayout";
import {PostsPage} from "./pages/PostsPage";
import {UsersPage} from "./pages/UsersPage";
import {UserPage} from "./pages/UserPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
    },
    {
        path: 'users', element: <UsersPage/>
    },
            {
                path: 'users/:id', element: <UserPage/>
            },
    {
        path: 'posts', element: <PostsPage/>
    },
            {
                path: 'posts/:id', element: <PostPage/>
            }
]
}
])

export {
    router
}