import {FC, PropsWithChildren} from "react";

import {IUser} from "../../interfaces";

interface IProps extends PropsWithChildren {
    user: IUser
}
const User: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div >
            <p>{user.id} </p>
            <p>{user.name} </p>
            <p>{user.username} </p>
            <p>{user.email} </p>
            <hr/>
        </div>
    );
};

export {User};