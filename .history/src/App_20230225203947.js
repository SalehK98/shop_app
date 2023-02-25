import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shoes from "./pages/Shoes/Shoes";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        {
          path: "shoes",
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
