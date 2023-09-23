import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LOGO_LINK } from "../constant";
import { Footer, Header } from "../components";
import ROUTE from "./routes.config";

function Root() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-primary">
            <Header
                logo={<img src={LOGO_LINK} alt="logo" />}
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
            <main className="grow flex justify-center">
                <div className="main-inner">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Root;
