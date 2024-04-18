import { PropsWithChildren } from "react";
import { Grid, Container } from "@components/ui/";
import Header from "./Header";

const PostsLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <Container>
    <Header />
    <Grid container spacing={3} display="flex">
      { children }
    </Grid>
  </Container>
)

export default PostsLayout;
