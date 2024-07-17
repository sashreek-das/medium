
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Loader } from "../components/Loader";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useBlogs } from "../hooks"
import 'react-loading-skeleton/dist/skeleton.css';
export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading){
        return <Loader/>
    }
    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                />)}
            </div>
        </div>
    </div>

}