import clsx from "clsx";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

function HomePage() {
    const { t } = useTranslation();
    const animationCls = "duration-500 ease-in-out";

    const cardItems = [
        {
            title: t("aboutUs"),
            content: t("aboutUsContent"),
            image: "/images/about-us.png",
        },
        {
            title: t("vision"),
            content: t("visionContent"),
            image: "/images/vision.png",
        },
        {
            title: t("mission"),
            content: t("missionContent"),
            image: "/images/mission.png",
        },
    ];

    return (
        <div className="space-y-8">
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {cardItems.map((cardItem, i) => {
                    return (
                        <div
                            key={i}
                            className={clsx(styles.card, "bg-[#1a2b3d] rounded-xl relative overflow-hidden group")}
                        >
                            <div className={clsx(styles["card-top"], "w-full absolute top-0", animationCls)}>
                                <div
                                    className={clsx(
                                        styles["card-image-container"],
                                        "w-full my-6 px-8 flex justify-center",
                                        animationCls
                                    )}
                                >
                                    <img className="object-contain" src={cardItem.image} alt={cardItem.title} />
                                </div>

                                <div className="px-8">
                                    <p
                                        className={clsx(
                                            "text-3xl font-black text-secondary uppercase text-center whitespace-nowrap w-full group-hover:w-0",
                                            animationCls
                                        )}
                                    >
                                        {cardItem.title}
                                    </p>
                                </div>
                            </div>

                            <div
                                className={clsx(styles["card-bottom"], "w-full px-8 pb-8 absolute top-0", animationCls)}
                            >
                                <p
                                    className={clsx(
                                        "scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                                        animationCls
                                    )}
                                >
                                    {cardItem.content}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;
