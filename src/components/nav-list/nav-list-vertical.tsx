import clsx from "clsx";
import { TNavItem } from "./types";
import { NavLink } from "react-router-dom";

interface INavMenuProps {
    className?: string;
    items: TNavItem[];
}
export const NavListVertical = ({ className, items }: INavMenuProps) => {
    return (
        <div className={className}>
            <nav>
                <ul className="list-none text-lg">
                    {items.map((item, i) => {
                        return (
                            <li key={i} className="flex border-b border-black/20">
                                <NavLink to={item.path} className={() => clsx("w-full pl-6 pr-4 py-2")}>
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
