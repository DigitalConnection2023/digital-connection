import clsx from "clsx";
import styles from "./styles.module.css";

function HomePage() {
    const animationCls = "duration-500 ease-in-out";

    const cardItems = [
        {
            title: "Abc",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro sit ab blanditiis, qui
            maiores necessitatibus vero placeat iure, nobis ad? Maxime numquam dolor, doloremque rerum
            laborum sed sit eaque?`,
            image: "/images/about-us.png",
        },
        {
            title: "Abc",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro sit ab blanditiis, qui
            maiores necessitatibus vero placeat iure, nobis ad? Maxime numquam dolor, doloremque rerum
            laborum sed sit eaque?`,
            image: "/images/vision.png",
        },
        {
            title: "Abc",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro sit ab blanditiis, qui
            maiores necessitatibus vero placeat iure, nobis ad? Maxime numquam dolor, doloremque rerum
            laborum sed sit eaque?`,
            image: "/images/mission.png",
        },
    ];

    return (
        <div className="space-y-8">
            <div className="py-4 grid grid-cols-3 gap-8">
                {cardItems.map((cardItem, i) => {
                    return (
                        <div
                            key={i}
                            className={clsx(styles.card, "bg-black rounded-2xl relative overflow-hidden group")}
                        >
                            <div className={clsx(styles["card-top"], "w-full absolute top-0", animationCls)}>
                                <div
                                    className={clsx(
                                        styles["card-image-container"],
                                        "mt-10 mb-6 w-full flex justify-center",
                                        animationCls
                                    )}
                                >
                                    <img className="object-contain" src={cardItem.image} alt={cardItem.title} />
                                </div>

                                <div className="px-8">
                                    <div className={clsx("w-full group-hover:w-0", animationCls)}>
                                        <p className="text-4xl font-black uppercase text-center">{cardItem.title}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={clsx(styles["card-bottom"], "w-full px-8 absolute top-0", animationCls)}>
                                <p className={clsx("text-lg opacity-20 group-hover:opacity-100", animationCls)}>
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
