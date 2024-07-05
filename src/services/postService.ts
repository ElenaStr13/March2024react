import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    create: (data) => apiService.post(urls.posts.base, data)
    }

export {
    postService
}