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
            <img className="w-full rounded-md lg:h-[600px]" src={"https://i.ibb.co/K9QWmyJ/banner.jpg"} alt="banner" />
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
                        src="https://i.ibb.co/TqcBj0d/Image1.png"
                        alt=""
                    />
                </div>
                <div className="lg:basis-1/2" />
            </div>
            <div>
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
                {/* <div className="h-[480px] lg:h-[500px] lg:bg-none bg-about-mission-mobile bg-right-top bg-auto bg-no-repeat bg-[rgba(0,0,0,0)] px-8 lg:mt-20 mt-16 lg:mr-0 mr-2">
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
                </div> */}
                <div className="box-border lg:w-full max-w-[1200px] lg:py-8 lg:m-0 m-3 py-3">
                    <div className="relative">
                        <div className="relative z-[2] grid lg:grid-cols-[38%1fr] grid-cols-1 lg:gap-[7.7%] gap-8 items-center lg:p-12 p-2 bg-[#0e1a25] rounded-lg">
                            <div>
                                <h4 className="bg-clip-text text-[rgba(0,0,0,0)] inline-block bg-title-mission text-lg font-extrabold">
                                    Our Mission
                                </h4>
                                <p className="lg:text-lg font-bold text-sm !leading-[2.8em] text-white lg:mt-[37px] mt-7">
                                    KNS luôn mong muốn hiểu hơn về người dùng, từ đó đổi mới và cải tiến các phần mềm
                                    cũng như phương pháp quản lý nhằm phát triển các thể loại game online, offline và
                                    cung cấp cho người dùng những trải nghiệm tuyệt vời nhất.
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/64ZV9mH/banner1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 z-[1] w-full h-full bg-linear-mission filter blur-lg"></div>
                    </div>
                </div>
                {/* <div className="py-8 px-12">
                    <h4 className="text-lg font-extrabold mb-9">Our Values</h4>
                    <div className="grid grid-cols-3 gap-16 max-w-none items-start pb-6">
                        <div className="items-center flex flex-col relative">
                            <h4 className="mb-2 text-2xl !leading-snug font-bold tracking-[-0.01em]">
                                <span className="text-gray-400 pr-2">01.</span>
                                Be Open
                            </h4>
                            <p className="text-center">
                                Luôn đón nhận sự đa dạng, bày tỏ suy nghĩ một cách cởi mở nhưng vẫn tôn trọng ý kiến của
                                người khác.
                            </p>
                        </div>
                        <div className="items-center flex flex-col relative">
                            <h4 className="mb-2 text-2xl !leading-snug font-bold tracking-[-0.01em]">
                                <span className="text-gray-400 pr-2">02.</span>
                                Be Bold
                            </h4>
                            <p className="text-center">
                                Không giới hạn bản thân và không ngại dấn thân với những thử thách mới.
                            </p>
                        </div>
                        <div className="items-center flex flex-col relative">
                            <h4 className="mb-2 text-2xl !leading-snug font-bold tracking-[-0.01em]">
                                <span className="text-gray-400 pr-2">03.</span>
                                Move Faster
                            </h4>
                            <p className="text-center">Luôn phát triển và nhanh chóng biến ý tưởng thành hành động.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-16 max-w-none items-start pt-6">
                        <div className="items-center flex flex-col relative">
                            <h4 className="mb-2 text-2xl !leading-snug font-bold tracking-[-0.01em]">
                                <span className="text-gray-400 pr-2">04.</span>
                                Stay Update
                            </h4>
                            <p className="text-center">
                                Luôn cập nhật thông tin và ứng dụng những điều học được để tạo ra kết quả tốt hơn.
                            </p>
                        </div>
                        <div className="items-center flex flex-col relative">
                            <h4 className="mb-2 text-2xl !leading-snug font-bold tracking-[-0.01em]">
                                <span className="text-gray-400 pr-2">05.</span>
                                Achieve Together
                            </h4>
                            <p className="text-center">Luôn hướng tới mục tiêu chung trong mọi tình huống.</p>
                        </div>
                    </div>
                </div> */}
                <div className="px-8 py-8">
                    <h4 className="text-lg font-extrabold text-white">Our Values</h4>
                    <div className="lg:mt-12 mt-[60px] pb-12">
                        <ul>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-[#f5ce2e] border-b-0 lg:border-b lg:border-solid border-[#35424d]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-gray-400 tracking-[-1px]">
                                        01.
                                    </span>
                                    Be Open
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-white border-b border-solid lg:border-[#e4eaef] border-[#35424d]">
                                    Luôn đón nhận sự đa dạng, bày tỏ suy nghĩ một cách cởi mở nhưng vẫn tôn trọng ý kiến
                                    của người khác.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-[#3db161] border-b-0 lg:border-b lg:border-solid border-[#35424d]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-gray-400 tracking-[-1px]">
                                        02.
                                    </span>
                                    Be Bold
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-white border-b border-solid lg:border-[#e4eaef] border-[#35424d]">
                                    Không giới hạn bản thân và không ngại dấn thân với những thử thách mới.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-[#59bed5] border-b-0 lg:border-b lg:border-solid border-[#35424d]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-gray-400 tracking-[-1px]">
                                        03.
                                    </span>
                                    Move Faster
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-white border-b border-solid lg:border-[#e4eaef] border-[#35424d]">
                                    Luôn phát triển và nhanh chóng biến ý tưởng thành hành động.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-[#e14f4a] border-b-0 lg:border-b lg:border-solid border-[#35424d]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-gray-400 tracking-[-1px]">
                                        04.
                                    </span>
                                    Stay Update
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-white border-b border-solid lg:border-[#e4eaef] border-[#35424d]">
                                    Luôn cập nhật thông tin và ứng dụng những điều học được để tạo ra kết quả tốt hơn.
                                </div>
                            </li>
                            <li className="flex lg:flex-row flex-col items-stretch justify-left mt-[33px]">
                                <div className="inline-flex items-center lg:w-2/5 w-full lg:min-w-[372px] min-w-0 lg:pb-[14px] pb-2 lg:text-4xl text-2xl !leading-[1em] font-extrabold text-[#f39e52] border-b-0 lg:border-b lg:border-solid border-[#35424d]">
                                    <span className="lg:w-12 w-[30px] mr-2 lg:mr-[14px] text-2xl lg:text-4xl !leading-[1em] font-light text-gray-400 tracking-[-1px]">
                                        05.
                                    </span>
                                    Achieve Together
                                </div>
                                <div className="box-border inline-flex items-center lg:w-[60%] w-full pb-4 lg:pb-[14px] pl-0 lg:pl-7 text-sm lg:text-base !leading-[1.5em] text-white border-b border-solid lg:border-[#e4eaef] border-[#35424d]">
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
