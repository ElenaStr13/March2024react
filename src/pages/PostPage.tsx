import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux";

import {PostDetails} from "../components/Posts/PostDetails";
import {postActions} from "../redux/slices/postSlice";

const PostPage = () => {

    let {id} = useParams();
    let dispatch = useAppDispatch();

    let post = useAppSelector(state => state.postSlice.post);

    useEffect(() => {
        if (id) dispatch(postActions.loadPost(+id));
    }, [id]);

    return (
        <div>
            <PostDetails key={post.id} post={post}/>
        </div>
    );
};

export {PostPage};