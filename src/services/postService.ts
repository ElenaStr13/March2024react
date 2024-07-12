import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IPost} from "../interfaces";


const postService = {
    getAll: ():IRes<IPost[]> => apiService.get(urls.posts.base),
    getByUserId: (userId:number):IRes<IPost[]> => apiService.get(urls.posts.base, {params: {userId}}),
    byId: (id:number):IRes<IPost> => apiService.get(urls.posts.byId(id))
}

export {postService}