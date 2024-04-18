import { lazy } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

const Posts = lazy(() => import('./pages/Posts'));
const PostDetails = lazy(() => import('./pages/PostDetails'));
const CreatePost = lazy(() => import('./pages/CreatePost'));

export enum ROUTES {
  ROOT = '/',
  POST_DETAILS = '/posts/:id',
  POST_CREATE = '/posts/create',
  NOT_FOUND = '*'
}

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Posts />,
  },
  {
    path: ROUTES.POST_DETAILS,
    element: <PostDetails />,
  },
  {
    path: ROUTES.POST_CREATE,
    element: <CreatePost />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <h1>Not Found</h1>
  }
]);

export default router;
