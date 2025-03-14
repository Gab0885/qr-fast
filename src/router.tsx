import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./assets/components/RootLayout";
import QRCodeGenerator from "./assets/components/QRCodeGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // corresponde à rota "/"
        element: <QRCodeGenerator />,
      },
      {
        path: "faq",
        // element: <FAQ />,
      }
    ],
  },
]);

export default router;
