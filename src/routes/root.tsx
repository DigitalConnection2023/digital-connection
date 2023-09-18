import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import ROUTE from "./routes.config";
import { useTranslation } from "react-i18next";

function Root() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-primary">
            <Header
                logo={<span>Logo</span>}
                navItems={[
                    // {
                    //     title: "Home",
                    //     path: ROUTE.home(),
                    // },
                    {
                        title: t("Products"),
                        path: ROUTE.products(),
                    },
                    {
                        title: t("Partners"),
                        path: ROUTE.partners(),
                    },
                    {
                        title: t("Recruitment"),
                        path: ROUTE.recruitment(),
                    },
                    {
                        title: t("Contact"),
                        path: ROUTE.contact(),
                    },
                ]}
            />
            <div className="grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Root;
