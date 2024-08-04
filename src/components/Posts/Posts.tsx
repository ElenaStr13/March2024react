import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux";

import {postActions} from "../../redux/slices/postSlice";
import {Post} from "./Post";


const Posts = () => {

    let {postSlice: {posts,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default Posts;