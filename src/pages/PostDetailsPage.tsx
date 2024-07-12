import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../services";
import {PostDetails} from "../components/PostContainer/PostDetails";
import {useAppLocation} from "../hooks";
import {IPost} from "../interfaces";

const PostDetailsPage = () => {
    const {state} = useAppLocation<{ post: IPost }>();
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams();


    useEffect(() => {
        if(state?.post) {
            console.log(state.post)
            setPostDetails(state.post)
        }else {
            postService.byId(+id).then(({data}) => setPostDetails(data))
        }
    }, [id])

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};