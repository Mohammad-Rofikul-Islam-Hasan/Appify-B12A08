import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <p>Installation</p>,
      },
    ],
  },
]);

export default router;
