export type TNavItem = {
    key?: string;
    title: string;
    path: string;
};

export type NavLinkCls = (args: { isActive: boolean; defaultCls: string }) => string;
