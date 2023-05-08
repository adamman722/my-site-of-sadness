import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import LandingPage from "./components/LandingPage";
import Resource from "./components/Resources/Resource";
import MainResourcePage from "./components/Resources/MainResourcePage";

export const router = createBrowserRouter([
  {
    path: "/",
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
      {
        path: "Resources",
        element: <MainResourcePage />,
      },
    ],
    errorElement: (
      <div>
        <h1>Hmmmmm seems to be an error here</h1>
      </div>
    ),
  },
]);
