import { useState, UIEvent } from "react";
import { Link } from "react-router-dom";

import data from "./data.json";
import clsx from "clsx";

function NewsPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const onScroll = (e: UIEvent<HTMLDivElement>) => {
        const { scrollLeft, clientWidth } = e.currentTarget;
        const newActiveIndex = Math.floor(scrollLeft) / clientWidth;

        if (newActiveIndex % 1 === 0) {
            setActiveIndex(newActiveIndex);
        }
    };

    return (
        <div className="py-8 px-6 lg:px-0">
            <div>
                <div className="flex no-scrollbar snap-x snap-mandatory" onScroll={onScroll}>
                    {data.posts.map((post) => {
                        return (
                            <Link key={post.id} className="w-full shrink-0 snap-center" to={post.id}>
                                <div className="lg:flex">
                                    <div className="shrink-0">
                                        <img src={post.image} alt="" />
                                    </div>
                                    <div className="grow p-4 bg-black">
                                        <p className="uppercase text-lg font-bold text-secondary">{post.title}</p>
                                        <p className="mt-2 line-clamp-4">{post.introduction}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-2 flex justify-center space-x-2">
                    {Array.from({ length: data.posts.length }, (_, i) => {
                        return (
                            <div
                                key={i}
                                className={clsx(
                                    "w-2 h-2 rounded-full",
                                    i === activeIndex ? "bg-secondary" : "bg-white"
                                )}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default NewsPage;
