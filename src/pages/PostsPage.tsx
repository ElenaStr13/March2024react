import React from 'react';
import {Posts} from "../components/PostContainer";
import {Outlet} from "react-router-dom";

const PostsPage = () => {


    return (
        <div>
            POSTS
            <Outlet/>
            <hr/>
             <Posts />
        </div>
    );
};

export {PostsPage};