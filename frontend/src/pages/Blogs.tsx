
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar/>

        <div className="flex justify-center">
            <div className="justify-center">
                <BlogCard
                    id={"bjcjkd"}
                    authorName={"Harkirat Singh"}
                    title={"This is a blog about how to get more of ChatGPT without using it and also"}
                    content={"this is the content "}
                    publishedDate={"2nd Feb 2024"}
                />
                <BlogCard
                    id={"bjcjkd"}
                    authorName={"Harkirat Singh"}
                    title={"This is a blog about how to get more of ChatGPT without using it and also"}
                    content={"this is the content "}
                    publishedDate={"2nd Feb 2024"}
                />
                <BlogCard
                    id={"bjcjkd"}
                    authorName={"Harkirat Singh"}
                    title={"This is a blog about how to get more of ChatGPT without using it and also"}
                    content={"this is the content "}
                    publishedDate={"2nd Feb 2024"}
                />
            </div>
        </div>
    </div>

}