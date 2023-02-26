import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shoes from "./pages/Shoes/Shoes";
import Shoe from "./pages/Shoe/Shoe";
import Error from "./pages/Error/Error";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayoutWrapper />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shoes",
          element: <Shoes />,
        },
        {
          path: "shoes/:showId",
          element: <Shoe />,
        },
        {
          path: "addShoe",
          element: <Shoes />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
