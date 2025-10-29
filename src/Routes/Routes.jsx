import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/app/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>
      },
    ],
  },
]);

export default router;
