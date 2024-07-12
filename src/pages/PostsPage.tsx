import React from 'react';
import {Posts} from "../components/PostContainer";
import {Outlet, useParams} from "react-router-dom";

const PostsPage = () => {
    const {id} = useParams();

    return (
        <div>
            POSTS
            <Outlet/>
            <hr/>
             <Posts id={id}/>
        </div>
    );
};

export {PostsPage};