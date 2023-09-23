import clsx from "clsx";
import { NavLinkClsReturn, TNavItem } from "./types";

export const getCurrentModuleIndex = (items: TNavItem[], pathname: string) => {
    const modulePath = pathname.split("/")[1];
    return items.findIndex((item) => (item.path === "/" ? pathname === "/" : item.path === modulePath));
};

type TDefaultClassName = {
    padding?: string;
    fontW?: string;
    color?: string;
};
export const getNavLinkCls = (requiredCls?: string, defaultCls?: TDefaultClassName, cls?: NavLinkClsReturn) => {
    const classNames = [requiredCls];
    const { padding: PADDING, fontW: FONT_W, color: COLOR } = defaultCls || {};

    if (cls === undefined) {
        classNames.push(PADDING, FONT_W, COLOR);
    } else if (typeof cls === "string") {
        classNames.push(cls);
    } else {
        const { padding = PADDING, fontW = FONT_W, color = COLOR, others } = cls;
        classNames.push(padding, fontW, color, others);
    }
    return clsx(classNames);
};
