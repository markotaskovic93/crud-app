
import type { IPost } from "@api/posts";
import NoResults from "@components/common/NoResults";
import PostCard from "./components/PostCard";

const PostsCards: React.FC<{ posts: IPost[] }> = ({
  posts
}) => {
  // Here we can decide for example how we want to show posts, in grid, list etc...
  // For now is simple solution, restricted only for grid

  const renderPosts = () => posts.length > 0 ? 
    posts.map(post => <PostCard {...post} key={post.id} />) : 
    <NoResults />

  return (
    <>
      { renderPosts() }
    </>
  )
}

export default PostsCards;
