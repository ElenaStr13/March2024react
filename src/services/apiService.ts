import axios from 'axios';
import {baseURL, urls} from "../constants";
import {IPost, IUser} from "../interfaces";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
});


export const userService = {
    getAll: async () => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id:number) => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
}

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id:number) => {
        const response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    }
}