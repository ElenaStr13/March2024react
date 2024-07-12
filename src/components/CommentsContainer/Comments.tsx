import {FC, PropsWithChildren, useEffect, useState} from "react";

import {Comment} from "./Comment";
import {commentService} from "../../services/commentService";
import {IComment} from "../../interfaces";

interface IProps extends PropsWithChildren {
    postId:number;

}

const Comments: FC<IProps>  = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};