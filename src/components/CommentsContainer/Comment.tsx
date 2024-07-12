import {FC, PropsWithChildren} from "react";
import {IComment} from "../../interfaces";

interface IProps extends PropsWithChildren {
    comment:IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};