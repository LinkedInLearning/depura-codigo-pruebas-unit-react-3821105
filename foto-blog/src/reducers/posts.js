import { createSlice } from '@reduxjs/toolkit'
import { POSTS } from "../datos/posts"

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: POSTS,
  },
  reducers: {
    likePost: (state, action) => {
      const postId = action.payload;
      state.posts.forEach(post => {
        if (post.idPost === postId) {
          post.totalMeGusta += 1;
        }
      });
    },
    comentarPost: (state, action) => {
      const { idPost, comentario } = action.payload;
      state.posts = state.posts.map(post => {
        if (post.idPost === idPost) {
          post.comentarios.push(comentario);
        }
        return post;
      });
    },
  },
})

export const { likePost, comentarPost } = postsSlice.actions

export default postsSlice.reducer
