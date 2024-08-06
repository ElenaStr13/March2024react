import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux";

import {userAction} from "../redux/slices/userSlice";
import {UserDetails} from "../components/Users/UserDetails";

const UserPage = () => {

    let {id} = useParams();
    let dispatch = useAppDispatch();

    let user = useAppSelector(state => state.userSlice.user);

    useEffect(() => {
        if (id) dispatch(userAction.loadUser(+id));
    }, [id]);

    return (
        <div>
            <UserDetails key={user.id} user={user}/>
        </div>
    );
};

export {UserPage};