import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <div className="border-b border-gray-300 bg-white flex justify-between items-center px-10 py-3 shadow-md">
            <Link to={"/blogs"}>
                <div className="text-xl font-bold text-gray-900">
                    Medium
                </div>
            </Link>
            <div className="flex items-center space-x-4">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-3 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center mb-2 shadow-lg"
                    >
                        New Blog
                    </button>

                </Link>
                <Link to={`/signin`}>
                    <button type="button" onClick={() => localStorage.removeItem("token")}>Logout</button>
                </Link>

                <Avatar name="harkirat" />
            </div>
        </div>
    );
};