import { useRoutes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import RouterApp from "./routers";
import LayoutSite from "./layouts/LayoutSite/LayoutSite";
import LayoutAdmin from "./layouts/LayoutAdmin/LayoutAdmin";


function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
    },
    { 
      path: "admin", 
      element: <LayoutAdmin />,
      children: RouterApp.RouterAdmin,
     },
     {
      path: "*",
      element: <NoPage />
     }
  ]);

  return element;
}

export default App;
