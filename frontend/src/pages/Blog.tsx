import { FullBlog } from "../components/FullBlog";
import { Loader } from "../components/Loader";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <Loader />;
    }

    if (!blog) {
        return <div>Blog not found.</div>;
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
};
