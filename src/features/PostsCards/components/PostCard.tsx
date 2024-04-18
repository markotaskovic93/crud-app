import type { IPost } from "@api/posts";
import { Grid, Typography } from "@components/ui/";
import { Link } from "react-router-dom";


const PostCard: React.FC<IPost> = ({ 
  id, 
  title,
  body
}) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Typography variant="h6" component="h6" style={{ marginBottom: '10px', fontWeight: 'bold'}}>{title}</Typography>
      <Typography style={{ marginBottom: '10px'}}>{body}</Typography>
      <Link to={`/posts/${id}`}>Learn More</Link>
    </Grid>
  );
};

export default PostCard;
