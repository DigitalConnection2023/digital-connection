import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LOGO_LINK, ERoute } from "../constant";
import { Footer, Header } from "../components";

function Root() {
    const { t } = useTranslation();

    return (
        <div id="root-inner" className="min-h-screen flex flex-col bg-primary text-white">
            <Header
                logo={<img src={LOGO_LINK} alt="logo" />}
                navItems={[
                    {
                        title: t("home"),
                        path: ERoute.HOME,
                    },
                    {
                        title: t("news"),
                        path: ERoute.NEWS,
                    },
                    {
                        title: t("recruitment"),
                        path: ERoute.RECRUITMENT,
                    },
                    {
                        title: t("contact"),
                        path: ERoute.CONTACT,
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
