import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import LandingPage from "./components/LandingPage";
import Resource from "./components/Resources/Resource";
import MainResourcePage from "./components/Resources/MainResourcePage";

//I am going to to take the data through here and pass it to the right component
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
        path: "/Resources/JavaScript",
        element: <MainResourcePage location="JavaScript" />,
      },
      { path: "/Resources/CSharp", element: <MainResourcePage /> },
      { path: "/Resources/CSS", element: <MainResourcePage /> },
      { path: "/Resources/HTML", element: <MainResourcePage /> },
      { path: "/Resources/Python", element: <MainResourcePage /> },
      { path: "/Resources/React", element: <MainResourcePage /> },
      { path: "/Resources/TypeScript", element: <MainResourcePage /> },
    ],
    errorElement: (
      <div>
        <h1>Hmmmmm seems to be an error here</h1>
      </div>
    ),
  },
]);
