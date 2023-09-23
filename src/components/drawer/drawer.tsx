import clsx from "clsx";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IDrawerProps {
    open?: boolean;
    children: ReactNode;
    container?: Element | DocumentFragment | null;
    closeOnMaskClick?: boolean;
    onClose?: () => void;
}
export const Drawer = ({ open, children, container, closeOnMaskClick = true, onClose }: IDrawerProps) => {
    const onClickMask = () => {
        if (closeOnMaskClick) {
            onClose?.();
        }
    };

    return createPortal(
        <div className={clsx("", open ? "block" : "hidden")}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" onClick={onClickMask} />
            <div className="absolute top-0 bottom-0 right-0">{children}</div>
        </div>,
        container || document.body
    );
};
