import clsx from "clsx";
import styles from "./styles.module.css";

function HomePage() {
    const animationCls = "duration-500 ease-in-out";

    const cardItems = [
        {
            title: "About Us",
            content: `KNS là một công ty trẻ, hoạt động chuyên nghiệp ra đời với mong muốn mang đến cho các doanh nghiệp
            sức mạnh chuyển hóa từ các trò chơi, với nền tảng là các ứng dụng trò chơi in-app. Chúng tôi muốn giúp các
            doanh nghiệp kết nối gần hơn với khách hàng, qua đó tăng tỷ lệ chuyển đổi và góp phần thúc đẩy tăng trưởng 
            doanh số vượt bật.`,
            image: "/images/about-us.png",
        },
        {
            title: "Vision",
            content: `Với đội ngũ nhiệt huyết và công nghệ tiên tiến, KNS đặt mục tiêu xuất bản và phát triển các sản
            phẩm giải trí đáp ứng nhu cầu của khách hàng trong nước và xuất khẩu sang nước khác, cung cấp các trò chơi
            đa nền tảng trên mobile, TV, PC và blockchain hay thậm chí có thể chơi game được trên máy bay, ô tô. Chúng
            tôi mong muốn kết nối công nghệ với mọi người trên bất kỳ loại thiết bị nào.`,
            image: "/images/vision.png",
        },
        {
            title: "Mission",
            content: `Với mục tiêu luôn hướng về khách hàng, chúng tôi luôn kiểm soát, đảm bảo đạt mục tiêu phát triển
            và vận hành, sở hữu IP và sản phẩm độc đáo, tạo nền tảng và hệ thống bền vững, thiết kế bền vững, thiết lập
            kết nối vĩnh cửu. Sứ mệnh của chúng tôi là giúp doanh nghiệp của bạn tiếp cận gần hơn với người dùng và thị
            trường mục tiêu. `,
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
