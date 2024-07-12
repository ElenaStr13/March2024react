import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IPost} from "../../interfaces";
import {postService} from "../../services";
import {Post} from "./Post";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../Pagination-component/Pagination-Component";

interface IProps extends PropsWithChildren {

}

const Posts:FC<IProps> = () => {
    const [query, setQuery] = useSearchParams({page: '0'});

    const page = +query.get('page');
    const [posts, setPosts]=useState<IPost[]>([]);

        useEffect(() =>{
                postService.getAll().then(({data}) => setPosts(data))
        }, [page])

        let start = +page*10;
        let stop = start+10;

    const currentPosts = posts.slice(start,stop)

    return (
        <div>
            {currentPosts.map(post => <Post key={post.id} post={post}/>)}
            < PaginationComponent />
        </div>
    );
};


export {Posts};