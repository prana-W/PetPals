import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home, CuteList, About, PetDetail, Error, LandingPage } from "./Pages";
import "./index.css";
import App from "./App.jsx";
import {Toaster} from 'react-hot-toast'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: 'pets',
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cute-list",
        element: <CuteList />,
      },
      {
        path: "/pet-detail/:id",
        element: <PetDetail />,
      },
      {
        path: '/welcome',
        element: <LandingPage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-left"/>
    <RouterProvider router={router} />

  </StrictMode>
);
