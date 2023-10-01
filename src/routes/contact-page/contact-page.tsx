import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function ContactPage() {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex flex-wrap items-center">
                        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12">
                            <div className="h-[528px] w-full">
                                <iframe
                                    src="https://maps.google.com/maps?q=Lim3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
                            <div className="px-3 text-center pt-2 py-10">
                                <div className="text-white bg-gray-800 w-14 h-14 inline-flex rounded-lg justify-center items-center mx-auto">
                                    <FaBuilding size={25} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-white font-bold	text-xl">Thông tin công ty</h3>
                                    <p className="text-gray-400 font-normal text-base mt-1">Công ty TNHH Kết Nối Số</p>
                                </div>
                            </div>
                            <div className="px-3 text-center pb-10">
                                <div className="text-white bg-gray-800 w-14 h-14 inline-flex rounded-lg justify-center items-center mx-auto">
                                    <FaMapMarkerAlt size={25} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-white font-bold	text-xl">Địa chỉ</h3>
                                    <p className="text-gray-400 font-normal text-base mt-1">
                                        Tầng 18, Toà nhà Lim Tower 3<br></br>
                                        29A Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                                    </p>
                                </div>
                            </div>
                            <div className="px-3 text-center pb-2">
                                <div className="text-white bg-gray-800 w-14 h-14 inline-flex rounded-lg justify-center items-center mx-auto">
                                    <FaPhoneAlt size={25} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-white font-bold	text-xl">Liên hệ</h3>
                                    <p className="text-gray-400 font-normal text-base mt-1">(028) 3910 1085</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
