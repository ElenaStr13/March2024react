import {Comments} from "../CommentsContainer";
import {FC, PropsWithChildren} from "react";
import {IPost} from "../../interfaces";
import {useNavigate} from "react-router-dom";
interface IProps extends PropsWithChildren {
     postDetails:IPost
}
const PostDetails: FC<IProps> = ({postDetails}) => {
    const {id, userId, title, body} = postDetails;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            Comments for this post
            {/*<button onClick={() => navigate(`comments`)}>Comments</ button>*/}
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};