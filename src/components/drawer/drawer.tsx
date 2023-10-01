import clsx from "clsx";
import { ReactNode, useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

export type TDrawerControl = {
    toggle: (newOpen?: boolean) => void;
};

interface IDrawerProps {
    open?: boolean;
    children: ReactNode;
    closeOnMaskClick?: boolean;
    onClose?: () => void;
    afterClose?: () => void;
}
export const Drawer = forwardRef<TDrawerControl, IDrawerProps>(
    ({ open, children, closeOnMaskClick = true, onClose, afterClose }, ref) => {
        const [state, setState] = useState<"OPEN" | "CLOSING" | "CLOSED">("CLOSED");
        const isOpen = open ?? state === "OPEN";

        useImperativeHandle(ref, () => ({
            toggle: (newOpen) =>
                setState((currentState) => {
                    if (newOpen !== undefined) {
                        return newOpen ? "OPEN" : "CLOSING";
                    }
                    return currentState === "OPEN" ? "CLOSING" : "OPEN";
                }),
        }));

        useEffect(() => {
            if (open !== undefined) {
                if (open) {
                    setState("OPEN");
                } else if (state !== "CLOSED") {
                    setState("CLOSING");
                }
            }
        }, [open]);

        const onClickMask = () => {
            if (closeOnMaskClick) {
                onClose?.();
            }
        };

        const afterCloseDrawer = () => {
            if (state === "CLOSING") {
                setState("CLOSED");
                afterClose?.();
            }
        };

        return createPortal(
            <div className={clsx("absolute z-40 top-0 bottom-0 overflow-hidden", state === "CLOSED" ? "" : "w-full")}>
                <div
                    className={clsx("absolute top-0 bottom-0 left-0 right-0 bg-black/40", isOpen ? "block" : "hidden")}
                    onClick={onClickMask}
                />
                <div
                    className={clsx(
                        "absolute top-0 bottom-0 left-full duration-300 ease-in-out",
                        isOpen ? "-translate-x-full" : "translate-x-0"
                    )}
                    onTransitionEnd={afterCloseDrawer}
                >
                    {children}
                </div>
            </div>,
            document.body
        );
    }
);
