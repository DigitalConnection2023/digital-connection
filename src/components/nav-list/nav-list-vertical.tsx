import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { NavLinkCls, TNavItem } from "./types";
import { getCurrentModuleIndex, getNavLinkCls } from "./utils";

interface INavMenuProps {
    className?: string;
    indicatorBg?: string;
    navItemCls?: string;
    items: TNavItem[];
    navLinkCls?: NavLinkCls;
    onClickItem?: () => void;
}
export const NavListVertical = ({
    className,
    indicatorBg = "bg-black",
    items,
    navLinkCls,
    onClickItem,
}: INavMenuProps) => {
    const location = useLocation();
    const currentIndex = getCurrentModuleIndex(items, location.pathname);

    return (
        <nav className={clsx("relative", className)}>
            <div
                className={clsx("w-1 h-11 absolute top-0 left-0", indicatorBg)}
                style={{
                    translate: `0 ${44.8 * currentIndex}px`,
                }}
            />

            <ul className="list-none text-lg">
                {items.map((item, i) => {
                    return (
                        <li key={i} className="flex">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => {
                                    return getNavLinkCls(
                                        "w-full",
                                        {
                                            padding: "pl-9 pr-4 py-2",
                                            fontW: "font-semibold",
                                        },
                                        navLinkCls?.({ isActive })
                                    );
                                }}
                                onClick={onClickItem}
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
