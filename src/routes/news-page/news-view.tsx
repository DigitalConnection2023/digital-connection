import { useParams } from "react-router-dom";
import data from "./data.json";

export function NewsView() {
    const { id } = useParams();
    const post = data.posts.find((post) => post.id === id);

    if (post) {
        return (
            <div>
                <div>
                    <p>{post.title}</p>
                </div>
                <div>
                    <img src={post.image} />
                </div>
                <div>
                    <p>{post.content}</p>
                </div>
            </div>
        );
    }

    return null;
}
