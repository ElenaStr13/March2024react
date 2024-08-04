import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux";

import {userActions} from "../../redux/slices/userSlice";
import {User} from "./User";


const Users = () => {

    let {userSlice: {users,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default Users;