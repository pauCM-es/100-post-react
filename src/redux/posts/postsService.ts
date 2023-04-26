import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { Post } from "../../interfaces/post.interface";

// const POSTS_URL = process.env.REACT_APP_POSTS_URL
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'


export const fetchPosts = createAsyncThunk("/posts", async () => {
  const controller = new AbortController();

  // This will automatically dispatch a `pending` action first,
  // and then `fulfilled` or `rejected` actions based on the promise.
  const res = await axios.get<Post[]>(POSTS_URL!, {
    signal: controller.signal,
  });
  return res.data;
});


export const fetchPostById = createAsyncThunk("/post/byId", async (id: string) => {
  const controller = new AbortController();
  const res = await axios.get<Post>(`${POSTS_URL}/${id}`, {
    signal: controller.signal,
  });
  return res.data;
});

