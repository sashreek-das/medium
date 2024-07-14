import { FullBlog } from "../components/FullBlog";
import { Loader } from "../components/Loader"
import { useBlog, useBlogs } from "../hooks"
import { useParams } from "react-router-dom"
export const Blog = () => {
    const {id} = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
        })
    if (loading) {
        return <Loader />
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>


}