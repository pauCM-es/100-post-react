import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PostEdit from "../pages/Post/PostEdit/PostEdit";
import PostView from "../pages/Post/PostView/PostView";

// Type infered
export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <PostView />
      },
      {
        path: "post/:id/edit",
        element: <PostEdit />,
      },
      {
        path: "login",
        element: <Login />
      },
    ]
  },
]