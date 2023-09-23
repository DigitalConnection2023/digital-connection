import clsx from "clsx";
import i18n from "i18next";
import { ReactNode, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DEFAULT_LANG } from "../../constant";
import { LanguageSwitch } from "../language-switch";
import { NavListHorizontal, NavListVertical, TNavItem } from "../nav-list";
import { Drawer } from "../drawer";

interface IHeaderProps {
    className?: string;
    logo?: ReactNode;
    homeLink?: string;
    navItems: TNavItem[];
}
export function Header({ className, logo, homeLink = "/", navItems }: IHeaderProps) {
    const [activeNavList, setActiveNavList] = useState(false);

    return (
        <header className={clsx("flex justify-center sticky top-0 z-50 bg-black", className)}>
            <div className="header-inner mx-auto py-2 flex justify-between">
                <Link to={homeLink}>{logo}</Link>

                <div className="flex items-center space-x-2">
                    <button
                        className="block lg:hidden p-2 relative z-50"
                        onClick={() => setActiveNavList(!activeNavList)}
                    >
                        <FaBars className="text-2xl" />
                    </button>

                    <Drawer
                        open={activeNavList}
                        container={document.getElementById("root-inner")}
                        onClose={() => setActiveNavList(false)}
                    >
                        <NavListVertical className="w-48 h-full pt-16 bg-white text-black" items={navItems} />
                    </Drawer>

                    <NavListHorizontal className="hidden lg:block" indicatorCls="bg-secondary" items={navItems} />

                    <LanguageSwitch defaultValue={DEFAULT_LANG} onChange={i18n.changeLanguage} />
                </div>
            </div>
        </header>
    );
}
