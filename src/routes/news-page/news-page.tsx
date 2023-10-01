import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import data from "./data.json";

function NewsPage() {
    return (
        <div className="py-8 px-6 lg:px-0">
            <div className="flex">
                <Swiper
                    loop
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {data.posts.map((post) => {
                        return (
                            <SwiperSlide key={post.id}>
                                <Link to={post.id}>
                                    <div className="lg:flex">
                                        <div className="shrink-0">
                                            <img className="lg:h-80" src={post.image} alt="" />
                                        </div>
                                        <div className="px-4 py-6 lg:px-6 lg:py-10 h-64 lg:h-auto grow bg-black space-y-2 ">
                                            <p className="uppercase text-lg font-bold text-secondary">{post.title}</p>
                                            <div className="h-px w-8 bg-white/60" />
                                            <p className="line-clamp-4">{post.introduction}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default NewsPage;
