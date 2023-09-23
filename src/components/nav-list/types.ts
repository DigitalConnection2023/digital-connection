export type TNavItem = {
    key?: string;
    title: string;
    path: string;
};

export type NavLinkClsReturn =
    | string
    | {
          padding?: string;
          fontW?: string;
          color?: string;
          others?: string;
      };

export type NavLinkCls = (args: { isActive: boolean }) => NavLinkClsReturn;
