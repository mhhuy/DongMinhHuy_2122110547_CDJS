import Brand from "../pages/backend/Brand";
import Category from "../pages/backend/Category";
import Menu from "../pages/backend/Menu";
import Post from "../pages/backend/Post";
import Product from "../pages/backend/Product";
import Topic from "../pages/backend/Topic";
import User from "../pages/backend/User";
import Banner from "../pages/backend/banner";

const RouterAdmin = [
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "banner",
    element: <Banner />,
  },
  {
    path: "post",
    element: <Post />,
  },
  {
    path: "topic",
    element: <Topic />,
  },
  {
    path: "order",
    element: <Banner />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "brand",
    element: <Brand />,
  },
  {
    path: "contact",
    element: <Brand />,
  },
];
export default RouterAdmin;
