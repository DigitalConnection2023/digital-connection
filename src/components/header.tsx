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

    const updateIndicator = (style: Partial<CSSStyleDeclaration>) => {
        if (indicator.current) {
            for (const key in style) {
                indicator.current.style[key] = style[key]!;
            }
        }
    };

    const moveIndicatorTo = (navLink?: HTMLAnchorElement) => {
        if (navLink && indicator.current) {
            // link's padding-x is 16
            updateIndicator({
                width: `${navLink.clientWidth - 32}px`,
                translate: `${(navLink.parentElement?.offsetLeft || 0) + 16}px`,
            });
        }
    };

    const moveIndicatorToCurrentModule = () => {
        const currentIndex = navItems.findIndex(checkIfCurrentModule);

        if (currentIndex !== -1) {
            const navLink = getNavLink(navList.current, currentIndex);
            moveIndicatorTo(navLink);
        } else if (indicator.current) {
            updateIndicator({
                width: `0px`,
                translate: `0px`,
            });
        }
    };

    useEffect(moveIndicatorToCurrentModule, [location.pathname]);

    useEffect(() => {
        const currentIndex = navItems.findIndex((item) => item.path === modulePath);
        const navLink = currentIndex !== -1 ? getNavLink(navList.current, currentIndex) : null;

        if (navLink) {
            let observed = false;

            const resizeObserver = new ResizeObserver(() => {
                if (observed) {
                    updateIndicator({
                        width: "0px",
                        translate: `0px`,
                        transitionDuration: "0ms",
                    });

                    setTimeout(() => {
                        updateIndicator({
                            transitionDuration: "300ms",
                        });
                        moveIndicatorTo(navLink);
                    }, 50);
                } else {
                    observed = true;
                }
            });

            resizeObserver.observe(navLink);

            return () => {
                resizeObserver.unobserve(navLink);
            };
        }
    }, [modulePath]);

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
                    <nav className="relative overflow-hidden">
                        <div
                            ref={indicator}
                            className="h-1 absolute -z-10 bottom-0 left-0 bg-secondary"
                            style={{
                                transition: "all 300ms ease-out",
                            }}
                        />

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
