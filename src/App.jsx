import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Start from "./Components/Start/Start";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Start></Start> },
      { path: "about", element: <About></About> },
      { path: "portfolio", element: <Portfolio></Portfolio> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={myRoutes}></RouterProvider>
    </>
  );
}
