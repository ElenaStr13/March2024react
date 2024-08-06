import {FC, PropsWithChildren} from "react";
import {IPost} from "../../interfaces";

interface IProps extends PropsWithChildren {
    post: IPost
}
const PostDetails: FC<IProps> = ({post}) => {
    const {id, title, body} = post;

    return (
        <div >
            <p>{post.id} </p>
            <p>{post.title} </p>
            <p>{post.body} </p>
            <hr/>
        </div>
    );
};

export {PostDetails};