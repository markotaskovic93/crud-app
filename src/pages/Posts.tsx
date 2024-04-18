import { fetchPosts, type IPost } from "@api/posts";
import PostsCards from "@features/PostsCards";
import PostsLayout from "@layouts/Posts/PostsLayout";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      setPosts(response);
    } 

    getPosts();
  }, []);

  return (
    <PostsLayout>
      <PostsCards posts={posts} />
    </PostsLayout>
  )
}

export default Posts;
