import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import { ThemeProvider } from "./components/ThemeProvider";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Kanban } from "./pages/panel/Kanban";
import { TooltipProvider } from "./components/ui/tooltip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/auth",
    children: [
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/panel",
    children: [
      {
        path: "/panel/stadistics",
      },
      {
        path: "/panel/job_track",
        element: <Kanban />,
      },
    ],
  },
]);

const root = document.getElementById("root");

if (!root) throw new Error("root is undefined");

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </ThemeProvider>,
);
