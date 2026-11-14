import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ServicePage from "../pages/ServicePage";
import NotFound from "../pages/NotFound";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "proyectos/:slug", element: <ProjectPage /> },
      { path: "servicios/:slug", element: <ServicePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
