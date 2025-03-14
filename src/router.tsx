import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./assets/components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // corresponde à rota "/"
        // element: <Home />,
      },
      {
        path: "products",
        // element: <FAQ />,
      }
    ],
  },
]);

export default router;
