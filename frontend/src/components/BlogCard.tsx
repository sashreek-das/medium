import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    id: string;
}

export const BlogCard = ({ 
    id,
    authorName,
    title,
    content
}: BlogCardProps) => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <Avatar />
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                        {currentDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    );
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar() {
    return (
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    );
}
