import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.css";

interface ILanguageSwitchProps {
    className?: string;
    value?: "vi" | "en";
    defaultValue?: "vi" | "en";
    onChange?: (lang?: "vi" | "en") => void;
}
export const LanguageSwitch = ({ className, defaultValue = "vi", value, onChange }: ILanguageSwitchProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const language = internalValue ?? value;

    const onSwitch = () => {
        const newLanguage = language === "vi" ? "en" : "vi";
        setInternalValue(newLanguage);
        onChange?.(newLanguage);
    };

    return (
        <button className={clsx("bg-white/90 relative", styles["language-switch"], className)} onClick={onSwitch}>
            <div
                className={clsx(
                    "absolute top-0.5 left-0.5 rounded-full duration-200 ease-in-out",
                    styles["switch-handle"],
                    styles[language]
                )}
            />
        </button>
    );
};
