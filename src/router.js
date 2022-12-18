import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import LandingPage from "./components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/my-site-of-sadness",
    element: <LandingPage />,
    children: [
      {
        path: "About Me",
        element: <AboutMe />,
      },
      {
        path: "Contact Me",
        element: <ContactMe />,
      },
    ],
    errorElement: (
      <div>
        <h1>Wrongggg</h1>
      </div>
    ),
  },
]);
