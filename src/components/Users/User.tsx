import {FC, PropsWithChildren} from "react";

import {IUser} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    user: IUser
}
const User: FC<IProps> = ({user}) => {
    const {id, name, email, username} = user;

    const navigate = useNavigate();
    return (
        <div >
            <p>{user.id} </p>
            <p>{user.name} </p>
            <button onClick={() => navigate(`/users/${id}`)}>getDetails</button>
            <hr/>
        </div>
    );
};

export {User};