import { useParams } from "react-router-dom";
import data from "./data.json";

export function NewsView() {
    const { id } = useParams();
    const post = data.posts.find((post) => post.id === id);

    if (post) {
        return (
            <div className="lg:pt-6 pb-6">
                <div className="lg:px-10 lg:py-8 lg:bg-black rounded-lg">
                    <div>
                        <img className="w-full lg:h-[480px] object-cover" src={post.image} />
                    </div>
                    <div className="mt-6 px-6 lg:px-0">
                        <p className="text-lg text-center font-bold uppercase">{post.title}</p>
                        <div className="mt-4 space-y-2 indent-8">
                            <p>
                                Sự phát triển của ngành trò chơi điện tử toàn cầu là kết quả của những tiến bộ công nghệ
                                nhanh chóng và bối cảnh hậu đại dịch, nơi các trò chơi điện tử không còn chỉ được xem là
                                những trò tiêu khiển đơn thuần. Xu hướng đang phát triển nhất là chơi game trên các
                                thiết bị di động. Xu hướng này ngày càng trở nên phổ biến trong những năm gần đây và dự
                                kiến sẽ tiếp tục trở nên phổ biến hơn trong năm 2023. Với sự phát triển của công nghệ
                                5G, trò chơi di động sẽ trở nên dễ tiếp cận hơn và mang lại trải nghiệm chơi game phong
                                phú hơn đối với người chơi ở mọi độ tuổi và hoàn cảnh.
                            </p>
                            <p>
                                Theo số liệu của một số công ty nghiên cứu thị trường, Việt Nam nói riêng và Đông Nam Á
                                nói chung là khu vực có tốc độ tăng trưởng game di động cao nhất trên thế giới, với mức
                                7,4% mỗi năm trong giai đoạn 2022 - 2025. Thị trường game của Việt Nam xếp thứ 5 khu vực
                                Đông Nam Á về doanh thu. Trong nhiều năm qua, nắm bắt cơ hội trong xu thế phát triển
                                ngành game của thế giới, các công ty sản xuất và phát hành game online tại Việt Nam đã
                                tận dụng lợi thế về nguồn nhân lực dồi dào, chất lượng cao để tập trung phát triển các
                                game thuộc đa dạng các các thể loại như: Mmorpg (game nhập vai trực tuyến nhiều người
                                chơi), Turn base (game dàn trận chiến thuật tấn công theo lượt), Moba (game đấu trường
                                trực tuyến nhiều người chơi), Casual (game phổ thông, đơn giản), SLG (game mô phỏng
                                chiến thuật), RPG (game nhập vai)...
                            </p>
                            <p>
                                Ngoài ra, công nghệ thực tế ảo (Virtual Reality - VR) cũng đang ngày càng tiên tiến và
                                dễ tiếp cận hơn đối với nhiều nhà sản xuất game. Điều này hứa hẹn sẽ mang lại trải
                                nghiệm chơi game phong phú hơn, đưa người chơi đến những thế giới mới và cung cấp cho họ
                                trải nghiệm chơi game thực tế mà những công nghệ trước đây chưa làm được. Một phương
                                thức chơi game khác cũng đang nhận được nhiều kỳ vọng từ không chỉ những nhà phát hành
                                game và còn từ người chơi chính là Cloud gaming. Bởi lẽ, phương thức này cho phép người
                                chơi được trải nghiệm các trò chơi điện tử trên nhiều thiết bị khác nhau mà không gặp
                                bất kỳ nào vấn đề trong việc xử lý đồ họa và lưu trữ dữ liệu của trò chơi. Việc xử lý
                                thông tin được chuyển đến các máy chủ được lưu trữ từ xa để chạy trò chơi và sau đó
                                truyền hình ảnh đến người chơi. Theo đó, tất cả những gì bạn cần làm là truy cập kết nối
                                Internet và có một thiết bị để phát: chẳng hạn như Laptop, PC, TV, điện thoại thông minh
                                hoặc máy tính bảng.
                            </p>
                            <p>
                                Cộng hưởng với những yếu tố thuận lợi, quá trình phát triển của các xu hướng này sẽ thay
                                đổi bộ mặt của ngành game để mang đến những trải nghiệm sống động hơn, hấp dẫn hơn, và
                                ngoạn mục hơn. Đồng thời, nó cũng sẽ làm cho các trò chơi phổ biến và thu hút hơn đối
                                với những game thủ mới. Có thể nói, Việt Nam là một thị trường game tiềm năng và có
                                nhiều cơ hội để phát triển. Hơn nữa, thị trường trò chơi điện tử chắc chắn sẽ giữ được
                                mức tăng trưởng ổn định trong năm 2023 và dự kiến sẽ đón nhận nhiều sự thay đổi hơn nữa
                                song song với sự phát triển của công nghệ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
