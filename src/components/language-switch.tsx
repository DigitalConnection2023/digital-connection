import clsx from "clsx";
import { useState } from "react";
import { EngFlag, ViFlag } from "./svg";

interface ILanguageSwitchProps {
    defaultLang?: "vi" | "en";
    onChange?: (lang?: "vi" | "en") => void;
}
export const LanguageSwitch = ({ defaultLang = "vi" }: ILanguageSwitchProps) => {
    const [language, setLanguage] = useState(defaultLang);

    const onClick = () => {
        setLanguage(language === "vi" ? "en" : "vi");
    };

    return (
        <button className="relative" onClick={onClick}>
            <div className={clsx("absolute", language === "vi" ? "left-0" : "right-0")}>
                {language === "vi" ? <ViFlag /> : <EngFlag />}
            </div>
        </button>
    );
};
