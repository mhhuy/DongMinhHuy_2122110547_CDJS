import Category from "../pages/backend/Category";
import Product from "../pages/backend/Product";
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
    element: <Banner />,
  },
  {
    path: "topic",
    element: <Banner />,
  },
  {
    path: "order",
    element: <Banner />,
  },
  {
    path: "menu",
    element: <Banner />,
  },
  {
    path: "user",
    element: <Banner />,
  },
  {
    path: "brand",
    element: <Banner />,
  },
];
export default RouterAdmin;
