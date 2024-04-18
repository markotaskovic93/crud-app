import { useNavigate, useParams } from "react-router-dom";
import { type IPost, updatePost, deletePost, fetchPost } from "@api/posts";
import UpdateDeletePost from "@features/UpdateDeletePost";
import PostsLayout from "@layouts/Posts/PostsLayout";
import Loading from "@components/common/Loading";
import { useCallback, useEffect, useState } from "react";
import { handleAsyncOperation } from "@utils/handle-async-operation";
import { ROUTES } from "../router";

const PostDetails: React.FC = () => {
  const [post, setPost] = useState<IPost>();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const response = await fetchPost(id);
        setPost(response);
      }

      getPost();
    }
  }, [id]);
  
  const onPostUpdate = useCallback(async (formData: Partial<IPost>): Promise<void> => {
    if (!id) return;
    await handleAsyncOperation(
      () => updatePost(id, formData),
      `Post ${id} is updated`,
      'Error while updating post'
    );
  }, [id, updatePost]);
  
  const onPostDelete = useCallback(async (): Promise<void> => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this post?")) return;
  
    await handleAsyncOperation(
      () => deletePost(id),
      `Post ${id} is deleted`,
      'Error while deleting post'
    );
  
    navigate(ROUTES.ROOT);
  }, [id, deletePost, navigate]);

  return (
    <PostsLayout>
      {post ? (
        <UpdateDeletePost 
          onUpdate={onPostUpdate} 
          onDelete={onPostDelete}
          {...post}  
        />
      ) : 
      <Loading />}
    </PostsLayout>
  );
};

export default PostDetails;
