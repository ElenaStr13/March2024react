import {FC, PropsWithChildren} from "react";

import {IPost} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    post: IPost
}
const Post: FC<IProps> = ({post}) => {
    const {id, userId, title} = post;
    const navigate = useNavigate();

    return (
        <div >
            <span>{post.id} </span>
            <span>User: {post.userId} </span>
            <p>Title: {post.title} </p>
            <button onClick={() => navigate(`/posts/${id}`)}>getDetails</button>
            <hr/>
        </div>
    );
};

export {Post};