import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {UsersPage, PostsPage, UserDetailsPage, PostDetailsPage} from "./pages";
import {Comments} from "./components/CommentsContainer";




const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element:<Navigate to={'users'}/>
            },
            {
                path: 'users', element:<UsersPage/>, children: [

                    {
                        path: ':id', element: <UserDetailsPage/>
                    }
                ]
            },
            {
                path: 'posts', element:<PostsPage/>
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }

        ]
    }
]);

export {router}