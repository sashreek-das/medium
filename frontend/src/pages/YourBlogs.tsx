import axios from "axios";
// import { Navigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const YourBlogs = () => {
    return <div>
        <button onClick={async () => {
            
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                name
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            console.log(response)
            
            // Navigate(`/blog/${response.data.id}`)
        }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
        </button>
    </div>
}