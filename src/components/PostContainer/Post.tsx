import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {IPost} from "../../interfaces";

interface IProps extends PropsWithChildren {
    post:IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id, userId,title, body} = post;
    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate(id.toString(), {state: {post}})}>Details</button>
        </div>
    );
};


export {Post};