import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IComment, IPost} from "../interfaces";

const commentService = {
    getByPostId: (postId:number):IRes<IComment[]> => apiService.get(urls.comments.base, {params: {postId}})
}

export {
    commentService
}