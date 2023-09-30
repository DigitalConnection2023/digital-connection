import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface IJobViewProps {
    className?: string;
    descriptions: string[];
    requirements: string[];
    jobs: Array<{
        id: string;
        title: string;
        quantity: number;
    }>;
}
export const JobView = (props: IJobViewProps) => {
    const { t } = useTranslation();

    return (
        <div className={clsx("space-y-4", props.className)}>
            <div>
                <p className="font-semibold">{t("jobDescription")}:</p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                    {props.descriptions.map((description, i) => {
                        return <li key={i}>{description}</li>;
                    })}
                </ul>
            </div>
            <div>
                <p className="font-semibold">{t("requirements")}:</p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                    {props.requirements.map((requirement, i) => {
                        return <li key={i}>{requirement}</li>;
                    })}
                </ul>
            </div>
            <div>
                <p className="font-semibold">{t("positions")}:</p>
                <div className="flex flex-col lg:flex-row lg:flex-wrap lg:space-x-4">
                    {props.jobs.map((job) => {
                        return (
                            <div key={job.id} className="mt-4 px-4 py-2 text-black bg-white/80 rounded-lg">
                                <p className="font-semibold">{job.title}</p>
                                <p>
                                    {t("quantity")}: {job.quantity}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
