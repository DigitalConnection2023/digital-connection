import { useTranslation } from "react-i18next";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { LOGO_LINK } from "../../constant";

const companyInfo = {
    phoneNo: "(028) 3910 1085",
    registerNo: "0317467192 - Cấp ngày 07/06/2023 bởi Sở Kế hoạch và Đầu tư TP.HCM",
    email: "...@anymindgroup.com",
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
                <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="p-1 bg-[#f6f8fa]">
                            <img src={LOGO_LINK} alt="logo" />
                        </div>
                        <p className="mt-2 text-secondary text-xl font-semibold">{t("companyTitle")}</p>
                        <p className="mt-1 text-center lg:text-start">{t("footer.companyDescription")}</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start space-y-1">
                        <p className="text-center lg:text-start">{t("companyAddress")}</p>
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
                    <p className="text-center">
                        {t("registerNo")}: {companyInfo.registerNo}
                    </p>
                    <p className="text-center">{t("footer.copyright")}</p>
                </div>
            </div>
        </footer>
    );
}
