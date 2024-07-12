import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces";
//import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    userDetails: IUser,
    //post:IPost
}

const UserDetails: FC<IProps> = ({userDetails}) => {
    const {id, name, username, email} = userDetails;
    //const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            {/*<button onClick={() => navigate(`/posts/:${id}`, {state: {post}})}>Posts for this user</button>*/}
        </div>
    );
};

UserDetails.propTypes = {

};

export {UserDetails};