import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces";
import {loadPosts} from "../reducers/posts/post.extra.reducers";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean
}

const postInitState: PostSliceType = {
    posts: [],
    isLoaded: false
}

export const postSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {
        xxx: (state) => {
            state.isLoaded = true
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPosts.rejected, (state, action) => {

            })
            .addMatcher(isFulfilled(loadPosts), (state, action) => {
                // state.isLoaded = true;
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts

}