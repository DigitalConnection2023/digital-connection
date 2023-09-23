import { useTranslation } from "react-i18next";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { LOGO_LINK } from "../constant";

const companyInfo = {
    phoneNo: "0123 456 7890",
    registerNo: "0987654321",
    email: "contact@dc.vn",
};

const socialContacts = [
    {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
    },
    {
        icon: <FaYoutube />,
        link: "https://youtube.com",
    },
];

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="flex justify-center bg-black">
            <div className="footer-inner pb-6 px-4 lg:px-0">
                <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <img src={LOGO_LINK} alt="logo" />
                        <p className="text-secondary text-xl font-semibold">{t("companyTitle")}</p>
                        <p>{t("footer.companyDescription")}</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <p>{t("companyAddress")}</p>
                        <p>
                            {t("phoneNo")}: {companyInfo.phoneNo}
                        </p>
                        <p>Email: {companyInfo.email}</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end">
                        <div className="mt-4 flex space-x-4 text-3xl">
                            {socialContacts.map((contact, i) => {
                                return (
                                    <a key={i} className="text-white/60 hover:text-white" href={contact.link}>
                                        {contact.icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p>
                        {t("registerNo")}: {companyInfo.registerNo}
                    </p>
                    <p>{t("footer.copyright")}</p>
                </div>
            </div>
        </footer>
    );
}
