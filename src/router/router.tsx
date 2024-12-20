import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <Navigate to={"/"} /> },
]);

export default router;
