import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import LandingPage from "./components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "About Me",
        element: <AboutMe />,
      },
      {},
    ],
    errorElement: (
      <div>
        <h1>Wrongggg</h1>
      </div>
    ),
  },
]);
