import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";
import Navbar from "./Navbar";
import Dynamic from "./components/Dynamic";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/contact/:id",
    element: (
      <div>
        <Navbar />
        <Dynamic />
      </div>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
const App = () => {
  return (
    <>
      <div className="text-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
