import { useNavigate } from "react-router-dom";
import PostsLayout from "@layouts/Posts/PostsLayout";
import CreatePostForm from "@features/CreatePost";
import { createPost, type IPost } from "@api/posts";
import { handleAsyncOperation } from "@utils/handle-async-operation";
import { useCallback } from "react";
import { ROUTES } from "../router";


const CreatePost: React.FC = () => {
  const navigate = useNavigate();

  const onPostCreate = useCallback(async (post: Partial<IPost>): Promise<void> => {
    await handleAsyncOperation(
      () => createPost(post),
      'Post created',
      'Error while creating post'
    );
  
    navigate(ROUTES.ROOT);
  }, [createPost, handleAsyncOperation, navigate]);

  return (
    <PostsLayout>
      <CreatePostForm 
        onPostCreate={onPostCreate} 
      />
    </PostsLayout>
  );
};

export default CreatePost;