import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import QRCodeGenerator from "./components/QRCode/QRCodeGenerator/QRCodeGenerator";

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
