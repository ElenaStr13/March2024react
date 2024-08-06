import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux";

import {userAction} from "../../redux/slices/userSlice";
import {User} from "./User";


const Users = () => {

     let {userSlice: {users,isLoaded}} = useAppSelector(state => state);


    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userAction.loadUsers());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default Users;