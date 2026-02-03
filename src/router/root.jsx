import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/404";
import DetailsPokemon from "../pages/DetailsPokemon";
import MentionLegales from "../pages/MentionLegales";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "DetailsPokemon/:idPokemon",
        element: <DetailsPokemon />,
      },
      {
        path: "MentionLegales",
        element: <MentionLegales />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
