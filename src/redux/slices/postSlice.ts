import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces";

import {postService} from "../../services/apiService";
import {AxiosError} from "axios/index";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean
    error: string;
    post: IPost | null;
}

const postInitState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: '',
    post: null
}

let loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        let posts = await postService.getAll();
        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

let loadPost = createAsyncThunk('userSlice/loadUser',
    async (id: number, thunkAPI) => {
        try {
            let post = await postService.getById(id);
            return thunkAPI.fulfillWithValue(post);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });
export const postSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {
        fillPost: (state, action) => {
            state.post = action.payload;
        },
        refillUsers: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPost.fulfilled, (state,  action) => {
                state.post = action.payload;
            })
            .addMatcher(isRejected(loadPosts, loadPost),
                (state, action) => {
                    state.error = action.payload as string;
                })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPost
}