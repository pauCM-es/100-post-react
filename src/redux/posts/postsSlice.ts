import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostById } from "./postsService";

import type { Post } from "../../interfaces/post.interface";

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

type Status = "uninitialized" | "loading" | "failed" | "succeded";
interface PostsState {
  posts: Post[];
  status: Status;
  error: SerializedError | null;
  post?: Post | null;
}

const initialState: PostsState = {
  posts: [],
  status: "uninitialized",
  error: null,
  post: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Same "mutating" update syntax thanks to Immer
    postDeleted: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    postEdited: (
      state,
      action: PayloadAction<{ id: number; postEdited: Post }>
    ) => {
      const { id, postEdited } = action.payload;
      state.posts = state.posts.map((post) => {
        if (post.id === id) return postEdited;
        else return post;
      });
    },
    postCleaned: (state) => {
      state.post = null;
    },
    postFoundById: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) state.posts.find((post) => post.id === action.payload);
      else {
        state.status = "failed";
        state.error = { message: "This post was not found." };
      }
    },
  },
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.posts = [];
        state.error = action.error;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeded";
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
        state.post = null;
      });
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { postDeleted, postEdited, postCleaned, postFoundById } =
  postsSlice.actions;

// Export the slice reducer as the default export
export default postsSlice.reducer;
