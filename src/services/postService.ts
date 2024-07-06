import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IPost} from "../interfaces/postInterface";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    create: (data:IPost) => apiService.post(urls.posts.base, data)
    }

export {
    postService
}