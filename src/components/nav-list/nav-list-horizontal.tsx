import clsx from "clsx";
import { useRef, useEffect, MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavLinkCls, TNavItem } from "./types";
import { getCurrentModuleIndex, getNavLinkCls } from "./utils";

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

interface INavListHorizontalProps {
    className?: string;
    indicatorBg?: string;
    items: TNavItem[];
    navLinkCls?: NavLinkCls;
}
export const NavListHorizontal = ({
    className,
    indicatorBg = "bg-black",
    items,
    navLinkCls,
}: INavListHorizontalProps) => {
    const location = useLocation();
    const indicator = useRef<HTMLDivElement>(null);
    const navList = useRef<HTMLUListElement>(null);

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
        const currentIndex = getCurrentModuleIndex(items, location.pathname);

        if (currentIndex !== -1) {
            const navLink = getNavLink(navList.current, currentIndex);
            moveIndicatorTo(navLink);
            return navLink;
        }
        if (indicator.current) {
            updateIndicator({
                width: `0px`,
                translate: `0px`,
            });
            return null;
        }
    };

    useEffect(() => {
        const navLink = moveIndicatorToCurrentModule();

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
    }, [location.pathname]);

    const onMouseEnterNavItem = (e: MouseEvent<HTMLLIElement>) => {
        const navLink = getNavLink(e.currentTarget);
        moveIndicatorTo(navLink);
    };

    const onMouseLeaveNavList = () => {
        moveIndicatorToCurrentModule();
    };

    return (
        <nav className={clsx("relative", className)}>
            <div
                ref={indicator}
                className={clsx("h-1 absolute -z-10 bottom-0 left-0", indicatorBg)}
                style={{
                    transition: "all 300ms ease-out",
                }}
            />
            <ul ref={navList} className="list-none flex" onMouseLeave={onMouseLeaveNavList}>
                {items.map((item, i) => {
                    return (
                        <li key={i} className="flex" onMouseEnter={onMouseEnterNavItem}>
                            <NavLink
                                className={({ isActive }) => {
                                    return getNavLinkCls(
                                        navItemCls,
                                        {
                                            padding: "px-4 py-2",
                                            fontW: "font-semibold",
                                        },
                                        navLinkCls?.({ isActive })
                                    );
                                }}
                                to={item.path}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
