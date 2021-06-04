import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

//for Post

export const createPost = (newPost, config) =>
  API.post('/posts', newPost, config);

export const getPosts = (page, searchProp) =>
  API.get(`/posts/${page}/?search=${searchProp}`).then(res => {
    return res.data;
  });

export const getPost = postId => API.get(`/posts/post/${postId}`);

export const getUserPosts = (pageNumber, config, searchProp) =>
  API.get(`/posts/user/posts/${pageNumber}/?search=${searchProp}`, config).then(
    res => res.data
  );

export const deletePost = postId => API.delete(`/posts/${postId}`);

export const updatePost = (postId, updatedPost) =>
  API.patch(`/posts/${postId}`, updatedPost);

//Comments

export const getPostComments = postId => API.get(`/comments/post/${postId}`);

export const createComments = (postId, newComment, config) =>
  API.post(`/comments/${postId}`, newComment, config);

export const deleteComment = commentId => API.delete(`/comments/${commentId}`);

export const likeComment = (commentId, config) =>
  API.get(`/comments/${commentId}`, config);

export const deleteLike = (commentId, config) =>
  API.get(`/comments/${commentId}/delete`, config);

export const getUserComments = config =>
  API.get('/comments/user/comments', config).then(res => res.data);

//User

export const createUser = (newUser, config) =>
  API.post('/user/register', newUser, config);

export const login = (user, config) => API.post('/user/login', user, config);

export const getUser = config => API.get('/user', config);
