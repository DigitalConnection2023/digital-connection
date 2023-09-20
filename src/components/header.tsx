import clsx from "clsx";
import i18n from "i18next";
import { useRef, useEffect, ReactNode, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitch } from "./language-switch";
import { DEFAULT_LANG } from "../constant";

type TNavItem = {
    key?: string;
    title: string;
    path: string;
};

const navItemCls = "nav-item";

function getNavLink(e: HTMLElement | null, option: "all"): NodeListOf<HTMLAnchorElement>;
function getNavLink(e: HTMLElement | null, option?: number): HTMLAnchorElement;
function getNavLink(e: HTMLElement | null, option?: "all" | number) {
    if (option) {
        const allNavLinks = e?.querySelectorAll(`.${navItemCls}`);
        return option === "all" ? allNavLinks : allNavLinks?.[option];
    }
    return e?.querySelector(`.${navItemCls}`);
}

interface IHeaderProps {
    logo?: ReactNode;
    homeLink?: string;
    navItems: TNavItem[];
}
export function Header({ logo, homeLink = "/", navItems }: IHeaderProps) {
    const location = useLocation();
    const indicator = useRef<HTMLDivElement>(null);
    const navList = useRef<HTMLUListElement>(null);

    const modulePath = location.pathname.split("/")[1];

    const checkIfCurrentModule = (item: TNavItem) => {
        return item.path === "/" ? location.pathname === "/" : item.path === modulePath;
    };

    const moveIndicatorTo = (navLink?: HTMLAnchorElement) => {
        if (navLink && indicator.current && navList.current) {
            // link's padding-x is 16
            const translateX = (navLink.parentElement?.offsetLeft || 0) + 16;

            indicator.current.style.width = `${navLink.clientWidth - 32}px`;
            indicator.current.style.translate = `${translateX}px`;
        }
    };

    const moveIndicatorToCurrentModule = () => {
        const moduleIndex = navItems.findIndex(checkIfCurrentModule);

        if (moduleIndex !== -1) {
            const navLink = getNavLink(navList.current, moduleIndex);
            moveIndicatorTo(navLink);
        } else if (indicator.current) {
            indicator.current.style.width = "0px";
            indicator.current.style.translate = "0px";
        }
    };

    useEffect(moveIndicatorToCurrentModule, [location.pathname]);

    const onMouseEnterNavItem = (e: MouseEvent<HTMLLIElement>) => {
        const navLink = getNavLink(e.currentTarget);
        moveIndicatorTo(navLink);
    };

    const onMouseLeaveNavList = () => {
        moveIndicatorToCurrentModule();
    };

    return (
        <header className="flex justify-center sticky top-0 bg-black/20">
            <div className="header-inner mx-auto py-2 flex justify-between">
                <Link to={homeLink}>{logo}</Link>

                <div className="flex items-center space-x-2">
                    <nav className="relative">
                        <div ref={indicator} className="h-1 absolute -z-10 bottom-0 left-0 duration-300 bg-secondary" />
                        <ul ref={navList} className="list-none flex" onMouseLeave={onMouseLeaveNavList}>
                            {navItems.map((item, i) => {
                                const isActive = checkIfCurrentModule(item);

                                return (
                                    <li
                                        key={i}
                                        className={clsx("flex", isActive ? "text-white" : "text-white/60")}
                                        onMouseEnter={onMouseEnterNavItem}
                                    >
                                        <Link className={clsx("px-4 py-2 font-semibold", navItemCls)} to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <LanguageSwitch defaultValue={DEFAULT_LANG} onChange={i18n.changeLanguage} />
                </div>
            </div>
        </header>
    );
}
