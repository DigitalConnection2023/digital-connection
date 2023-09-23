import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    //
}
export const Button = (props: IButtonProps) => {
    return <button {...props} className={props.className} />;
};
