import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../UsersContainer";
interface IProps {

}
const PaginationComponent: FC<IProps> = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [, setPrevious] = useState( 0);
    const page = +query.get('page');

        const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            setPrevious(page);
            return prev
        })
    }

    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString());
            return next
        })
    }

    return (
        <div>
                <button onClick={prev} disabled={!prev}>Prev page</button>
                <div>{page}</div>
                <button onClick={next} disabled={!next}>Next page</button>
            </div>
    );
};
export {PaginationComponent};