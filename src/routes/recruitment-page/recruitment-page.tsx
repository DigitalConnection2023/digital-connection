import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleRight } from "react-icons/fa6";
import { RiShiningFill } from "react-icons/ri";

import data from "./data.json";

function RecruitmentPage() {
    const { t } = useTranslation();

    const [selectedIndex, setSelectedIndex] = useState(0);

    // recruitment.title

    const department = data.departments[selectedIndex];

    const benefits = [
        "Mức lương cạnh tranh, tùy thuộc vào kinh nghiệm và năng lực chuyên môn.",
        "Chăm sóc sức khỏe, bảo hiểm.",
        "Môi trường làm việc năng động và sáng tạo.",
    ];

    return (
        <div className="py-8">
            <img className="w-full rounded-md" src="https://i.ibb.co/F7qPkH5/Banner3.jpg" alt="game-on" />

            <div className="mt-6 flex flex-col">
                <p className="text-4xl font-bold text-secondary text-center">
                    {t("Phát triển sự nghiệp của bạn cùng chúng tôi!")}
                </p>

                <div className="mt-3 mx-auto text-xl space-y-2">
                    {benefits.map((benefit, i) => {
                        return (
                            <p key={i} className="flex items-center space-x-2">
                                <RiShiningFill />
                                <span>{benefit}</span>
                            </p>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6">
                {data.departments.map((department, i) => {
                    return <img key={i} src={department.image} alt="" />;
                })}
            </div>

            <div className="mt-6 text-2xl flex items-center space-x-2">
                <p className="font-semibold uppercase">{t("openPositions")}</p>
            </div>

            <div className="mt-4 flex gap-6" style={{ height: 600 }}>
                <div className="shrink-0 flex flex-col">
                    {data.departments.map((department, i) => {
                        const selected = i === selectedIndex;

                        return (
                            <button
                                key={department.id}
                                className="py-1 text-left group"
                                onClick={() => setSelectedIndex(i)}
                            >
                                <div
                                    className={clsx(
                                        "flex items-center text-lg",
                                        selected ? "text-secondary" : "text-white/80 group-hover:text-white"
                                    )}
                                >
                                    <span className="w-6">{selected && <FaAngleRight />}</span>
                                    <span>{department.title}</span>
                                </div>
                                <p className="pl-6 text-white/80">
                                    {t("quantity")}: {department.jobs.length}
                                </p>
                            </button>
                        );
                    })}
                </div>

                <div className="grow col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-3 space-y-4">
                            <div>
                                <p className="font-semibold">{t("jobDescription")}:</p>
                                <ul className="mt-2 list-disc pl-6 space-y-1">
                                    {department.jobDescriptions.map((description, i) => {
                                        return <li key={i}>{description}</li>;
                                    })}
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold">{t("requirements")}:</p>
                                <ul className="mt-2 list-disc pl-6 space-y-1">
                                    {department.requirements.map((requirement, i) => {
                                        return <li key={i}>{requirement}</li>;
                                    })}
                                </ul>
                            </div>

                            <div className="flex flex-wrap space-x-4">
                                {department.jobs.map((job) => {
                                    return (
                                        <div key={job.id} className="px-4 py-2 text-primary bg-white/80 rounded-lg">
                                            <p className="font-semibold">{job.title}</p>
                                            <p>
                                                {t("quantity")}: {job.quantity}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* <img className="" src={department.image} alt={department.title} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruitmentPage;
