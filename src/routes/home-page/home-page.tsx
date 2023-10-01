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
        <div className="pb-8 lg:pt-8">
            <img
                className="w-full object-cover rounded-md lg:h-[600px]"
                src={"https://i.ibb.co/FDZzR2y/Banner.jpg"}
                alt="banner"
            />
            <div className="space-y-8 mx-2 lg:mx-0">
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
                                                "text-3xl font-black uppercase text-center whitespace-nowrap w-full group-hover:w-0",
                                                animationCls
                                            )}
                                        >
                                            {cardItem.title}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        styles["card-bottom"],
                                        "w-full px-8 pb-8 absolute top-0",
                                        animationCls
                                    )}
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
            <div
                className="space-y-8 flex flex-row h-[60vh] bg-no-repeat bg-bottom bg-cover"
                style={{ backgroundImage: "url(https://i.ibb.co/j33bNFt/Banner1.jpg)" }}
            >
                <div className="basis-full lg:basis-1/2 flex justify-center items-center">
                    <img
                        className="lg:max-w-md lg:px-0 px-1 object-cover"
                        src="https://i.ibb.co/3hSrJgj/Image1.png"
                        alt=""
                    />
                </div>
                <div className="lg:basis-1/2" />
            </div>
            <div className="bg-white">
                <div className="bg-about-purpose [background-position-x:center] [background-position-y:top] bg-no-repeat bg-[rgba(0,0,0,0)] lg:p-16 px-6 py-10 !bg-cover h-[550px] lg:h-[683px]">
                    <h4 className="text-lg font-extrabold">Our Purpose</h4>
                    <div className="flex flex-col lg:flex-row items-stretch justify-between mt-6">
                        <div className="relative lg:w-[48%]">
                            <img
                                className="absolute mix-blend-overlay lg:top-[36px] top-5 w-[279px] lg:w-full max-w-full"
                                src="https://anymindgroup.com/wp-content/themes/anymind/img/about/content_purpose_sp.png"
                                alt="purpose-img"
                            />
                        </div>

                        <p className="lg:w-[48%] lg:text-lg font-bold w-full pb-0 text-sm !leading-[2.8em] mt-10 lg:mt-11">
                            KNS không ngừng phấn đấu để trở thành công ty hàng đầu tại Việt Nam cũng như khu vực Đông
                            Nam Á trong lĩnh vực cung cấp các trò chơi trên thiết bị di động. <br></br>
                            <br></br>Mục tiêu của chúng tôi là thay đổi cách giải trí truyền thống và đến gần hơn với
                            người dùng.
                        </p>
                    </div>
                </div>
                <div className="h-[480px] lg:h-[500px] lg:bg-none bg-about-mission-mobile bg-right-top bg-auto bg-no-repeat bg-[rgba(0,0,0,0)] px-8 lg:mt-20 mt-16 lg:mr-0 mr-2">
                    <h4 className="text-lg font-extrabold text-black">Our Mission</h4>
                    <div className="bg-none lg:bg-about-mission-desktop lg:bg-right-top lg:bg-no-repeat bg-[rgba(0,0,0,0)] lg:h-[415px]">
                        <div className="lg:w-[60%] w-full">
                            <p className="lg:text-lg font-bold text-sm !leading-[2.8em] text-black lg:mt-[37px] mt-[60px] lg:pr-32 lg:pt-7">
                                KNS luôn mong muốn hiểu hơn về người dùng, từ đó đổi mới và cải tiến các phần mềm cũng
                                như phương pháp quản lý nhằm phát triển các thể loại game online, offline và cung cấp
                                cho người dùng những trải nghiệm tuyệt vời nhất.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-8 lg:mt-20">
                    <h4 className="text-lg font-extrabold text-black">Our Values</h4>
                    <div className="lg:mt-12 mt-[60px] pb-12">
                        <ul>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-black border-b-0 lg:border-b lg:border-solid border-[#27313b]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-[rgba(14,26,37,.2)] tracking-[-1px]">
                                        01.
                                    </span>
                                    Be Open
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-black border-b border-solid lg:border-[#e4eaef] border-[#27313b]">
                                    Luôn đón nhận sự đa dạng, bày tỏ suy nghĩ một cách cởi mở nhưng vẫn tôn trọng ý kiến
                                    của người khác.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-black border-b-0 lg:border-b lg:border-solid border-[#27313b]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-[rgba(14,26,37,.2)] tracking-[-1px]">
                                        02.
                                    </span>
                                    Be Bold
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-black border-b border-solid lg:border-[#e4eaef] border-[#27313b]">
                                    Không giới hạn bản thân và không ngại dấn thân với những thử thách mới.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-black border-b-0 lg:border-b lg:border-solid border-[#27313b]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-[rgba(14,26,37,.2)] tracking-[-1px]">
                                        03.
                                    </span>
                                    Move Faster
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-black border-b border-solid lg:border-[#e4eaef] border-[#27313b]">
                                    Luôn phát triển và nhanh chóng biến ý tưởng thành hành động.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-black border-b-0 lg:border-b lg:border-solid border-[#27313b]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-[rgba(14,26,37,.2)] tracking-[-1px]">
                                        04.
                                    </span>
                                    Stay Update
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-black border-b border-solid lg:border-[#e4eaef] border-[#27313b]">
                                    Luôn cập nhật thông tin và ứng dụng những điều học được để tạo ra kết quả tốt hơn.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-black border-b-0 lg:border-b lg:border-solid border-[#27313b]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-[rgba(14,26,37,.2)] tracking-[-1px]">
                                        05.
                                    </span>
                                    Achieve Together
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-black border-b border-solid lg:border-[#e4eaef] border-[#27313b]">
                                    Luôn hướng tới mục tiêu chung trong mọi tình huống.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
