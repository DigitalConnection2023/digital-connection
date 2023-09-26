import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import HomePage from "./routes/home-page";
import ErrorPage from "./routes/error-page";
import ContactPage from "./routes/contact-page";
import ProductsPage from "./routes/products-page";
import PartnersPage from "./routes/partners-page";
import RecruitmentPage from "./routes/recruitment-page";

import ROUTE from "./routes/routes.config";

import "./i18next";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTE.home(),
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: ROUTE.products(),
                element: <ProductsPage />,
                children: [
                    {
                        path: ":id",
                        element: <ProductsPage />,
                    },
                ],
            },
            {
                path: ROUTE.partners(),
                element: <PartnersPage />,
            },
            {
                path: ROUTE.recruitment(),
                element: <RecruitmentPage />,
            },
            {
                path: ROUTE.contact(),
                element: <ContactPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
