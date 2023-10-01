import clsx from "clsx";
import i18n from "i18next";
import { ReactNode, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation();
    const [activeNavList, setActiveNavList] = useState(false);

    useEffect(() => {
        if (activeNavList) {
            setActiveNavList(false);
        }
    }, [location]);

    const onClickMenuIcon = () => {
        setActiveNavList(!activeNavList);
    };

    const closeDrawer = () => {
        setActiveNavList(false);
    };

    return (
        <header className={clsx("flex justify-center sticky top-0 z-50 bg-black", className)}>
            <div className="header-inner mx-auto py-2 px-4 lg:px-0 flex justify-between">
                <div className="bg-[#f6f8fa]">
                    <div className="px-0.5 py-0.5">
                        <Link to={homeLink}>{logo}</Link>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="block lg:hidden p-2 text-2xl text-white relative z-50" onClick={onClickMenuIcon}>
                        {activeNavList ? <FaTimes /> : <FaBars />}
                    </button>

                    <Drawer open={activeNavList} onClose={closeDrawer}>
                        <div className="w-48 h-full pt-14 bg-primary border-l border-white/20">
                            <NavListVertical
                                indicatorBg="bg-secondary"
                                navLinkCls={({ isActive }) => ({
                                    color: isActive ? "text-white" : "text-white/60",
                                    others: "border-b border-white/10",
                                })}
                                items={navItems}
                            />
                        </div>
                    </Drawer>

                    <NavListHorizontal
                        className="hidden lg:block"
                        indicatorBg="bg-secondary"
                        navLinkCls={({ isActive }) => ({
                            color: isActive ? "text-white" : "text-white/60",
                        })}
                        items={navItems}
                    />

                    <LanguageSwitch defaultValue={DEFAULT_LANG} onChange={i18n.changeLanguage} />
                </div>
            </div>
        </header>
    );
}
