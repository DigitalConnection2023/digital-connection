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
                    {
                        title: t("home"),
                        path: ROUTE.home(),
                    },
                    {
                        title: t("products"),
                        path: ROUTE.products(),
                    },
                    {
                        title: t("partners"),
                        path: ROUTE.partners(),
                    },
                    {
                        title: t("recruitment"),
                        path: ROUTE.recruitment(),
                    },
                    {
                        title: t("contact"),
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
