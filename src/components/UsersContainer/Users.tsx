import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {userService} from "../../services";
import {IUser} from "../../interfaces";
import {User} from "./User";
import {PaginationComponent} from "../Pagination-component/Pagination-Component";

interface IProps extends PropsWithChildren {

}
const Users: FC<IProps> = () => {
    const [query, ] = useSearchParams({page: '1'});
    const page = +query.get('page');
    const [users, setUsers] = useState<IUser[]>([])


    useEffect(() => {
        if (page) {
            userService.getAll().then(({data})=> {
                setUsers(data)
            })
        }
    }, [page]);
    let start = +page;
    let stop = start+2
    const current = users.slice(start,stop)

    return (
        <div>
            {current.map(user => <User key={user.id} user={user}/>)}
            < PaginationComponent />

        </div>
    );
};

export {Users};