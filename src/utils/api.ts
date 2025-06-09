import axios from "axios";
import type { PostType } from "../types/post";

const placeholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})


export const getPosts = async (): Promise<PostType[]> => {
  const response = await placeholderApi.get('posts');
  return response.data;
}

export const sendPost = async (newPost: Omit<PostType, 'id'>) => {
  const response = await placeholderApi.post('posts', newPost);
  return response.data;
}

export const deletePost = async (id: number) => {
  const response = await placeholderApi.delete(`posts/${id}`);
  return response.data;
}