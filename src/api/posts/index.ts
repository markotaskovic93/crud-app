import axiosInstance from "@lib/axios";

export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<IPost[]> {
  try {
    const response: IPost[] = await axiosInstance.get('/posts');
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fetchPost(id: string): Promise<IPost> {
  try {
    const response: IPost = await axiosInstance.get(`/posts/${id}`);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updatePost(id: string, post: Partial<IPost>): Promise<void> {
  try {
    await axiosInstance.put(`/posts/${id}`, post);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deletePost(id: string): Promise<void> {
  try {
    await axiosInstance.delete(`/posts/${id}`);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createPost(post: Partial<IPost>): Promise<void> {
  try {
    await axiosInstance.post(`/posts`, post);
  } catch (error: any) {
    throw new Error(error);
  }
}
