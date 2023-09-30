import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleRight } from "react-icons/fa6";
import { RiShiningFill } from "react-icons/ri";

import { JobView } from "./job-view";
import data from "./data.json";

function RecruitmentPage() {
    const { t } = useTranslation();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const department = data.departments[selectedIndex];
    const benefits = ["recruit.bebefit_1", "recruit.bebefit_2", "recruit.bebefit_3"];

    return (
        <div className="pb-8 lg:pt-8">
            <img
                className="w-full object-cover rounded-md lg:h-[600px]"
                src="https://i.ibb.co/F7qPkH5/Banner3.jpg"
                alt="game-on"
            />

            <div className="mt-6 flex flex-col">
                <p className="text-2xl lg:text-4xl font-bold text-secondary text-center">{t("recruit.title")}</p>

                <div className="mt-3 px-4 mx-auto lg:text-xl space-y-2">
                    {benefits.map((benefit, i) => {
                        return (
                            <p key={i} className="flex space-x-2">
                                <RiShiningFill className="shrink-0 h-6" />
                                <span>{t(benefit)}</span>
                            </p>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 hidden lg:grid grid-cols-3 gap-6">
                {data.departments.map((department, i) => {
                    return <img key={i} src={department.image} alt="" />;
                })}
            </div>

            <div className="mt-6 px-4 lg:px-0">
                <div className="text-2xl flex items-center space-x-2">
                    <p className="font-semibold uppercase">{t("openPositions")}</p>
                </div>
                <div className="mt-4 lg:flex gap-6">
                    <div className="mb-4 flex lg:hidden justify-end">
                        <select
                            className="px-2 py-1 rounded-sm text-black font-semibold"
                            defaultValue={selectedIndex}
                            onChange={(e) => setSelectedIndex(+e.target.value)}
                        >
                            {data.departments.map((department, index) => {
                                return (
                                    <option key={department.id} value={index}>
                                        {department.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="hidden lg:flex flex-col shrink-0">
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

                    <JobView
                        className="grow"
                        descriptions={department.jobDescriptions}
                        requirements={department.requirements}
                        jobs={department.jobs}
                    />
                </div>
            </div>
        </div>
    );
}

export default RecruitmentPage;
