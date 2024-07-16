
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Loader } from "../components/Loader";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useBlog, useBlogs } from "../hooks"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading){
        return <Loader/>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="justify-center">
                {blogs.map(blog =>  <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"12th feb"}
                /> )}
                
            </div>
        </div>
    </div>

}