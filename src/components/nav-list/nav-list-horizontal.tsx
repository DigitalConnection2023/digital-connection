import clsx from "clsx";
import { useRef, useEffect, MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavLinkCls, TNavItem } from "./types";

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
    indicatorCls?: string;
    items: TNavItem[];
    navLinkCls?: NavLinkCls;
}
export const NavListHorizontal = ({ className, indicatorCls, items, navLinkCls }: INavListHorizontalProps) => {
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
        const currentIndex = items.findIndex(checkIfCurrentModule);

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
        const currentIndex = items.findIndex(checkIfCurrentModule);
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
        <nav className={clsx("relative", className)}>
            <div
                ref={indicator}
                className={clsx("h-1 absolute -z-10 bottom-0 left-0", indicatorCls)}
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
                                    const defaultCls = "px-4 py-2 font-semibold";

                                    return clsx(
                                        navItemCls,
                                        navLinkCls
                                            ? navLinkCls({ isActive, defaultCls })
                                            : [defaultCls, isActive ? "text-white" : "text-white/60"]
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
