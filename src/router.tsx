import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // corresponde à rota "/"
        element: <Home />,
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ],
  },
]);

export default router;
