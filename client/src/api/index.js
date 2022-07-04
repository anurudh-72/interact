import axios from 'axios'

const url = 'https://intereact-back.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost)