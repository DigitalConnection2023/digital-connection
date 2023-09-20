import clsx from "clsx";
import { useState } from "react";
import { EngFlag, ViFlag } from "./svg";

interface ILanguageSwitchProps {
    className?: string;
    value?: "vi" | "en";
    defaultValue?: "vi" | "en";
    onChange?: (lang?: "vi" | "en") => void;
}
export const LanguageSwitch = ({ className, defaultValue = "vi", value, onChange }: ILanguageSwitchProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const language = internalValue ?? value;

    const onClickLanguageIcon = (newLanguage: "vi" | "en") => {
        setInternalValue(newLanguage);
        onChange?.(newLanguage);
    };

    return (
        <div className={clsx("flex space-x-1", className)}>
            <button
                className="opacity-50 disabled:opacity-100"
                disabled={language === "vi"}
                onClick={() => onClickLanguageIcon("vi")}
            >
                <ViFlag />
            </button>
            <button
                className="opacity-50 disabled:opacity-100"
                disabled={language === "en"}
                onClick={() => onClickLanguageIcon("en")}
            >
                <EngFlag />
            </button>
        </div>
    );
};
