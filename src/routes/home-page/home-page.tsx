import clsx from "clsx";
import styles from "./styles.module.css";

function HomePage() {
    const animationCls = "duration-500 ease-in-out";

    const cardItems = [
        {
            title: "About Us",
            content: `DC was founded with the aim of leveraging the transformative power of games to benefit
            businesses. By providing in-app game applications, we facilitate closer connections between businesses and
            their customers, leading to increased conversion rates and significant sales growth.`,
            image: "/images/about-us.png",
        },
        {
            title: "Vision",
            content: `With a passionate team and advanced technology, DC aims to publish and develop entertainment
            products to meet the needs of domestic customers and export them to countries around the world.`,
            image: "/images/vision.png",
        },
        {
            title: "Mission",
            content: `Take control of the production, ensuring the development and operation's goals are met. Possess
            unique IP and its products, shaping exclusive brand identities. Create a sustainable platform and system,
            establish everlasting connections`,
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
                            className={clsx(styles.card, "bg-black rounded-xl relative overflow-hidden group")}
                        >
                            <div className={clsx(styles["card-top"], "w-full absolute top-0", animationCls)}>
                                <div
                                    className={clsx(
                                        styles["card-image-container"],
                                        "w-full mt-10 mb-6 px-8 flex justify-center",
                                        animationCls
                                    )}
                                >
                                    <img className="object-contain" src={cardItem.image} alt={cardItem.title} />
                                </div>

                                <div className="px-8">
                                    <p
                                        className={clsx(
                                            "text-3xl font-black uppercase text-center whitespace-nowrap w-full group-hover:w-0",
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
