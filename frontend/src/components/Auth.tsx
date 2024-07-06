// import { ChangeEvent, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { SignupInput } from "@sashreek-das/common";
// import axios from "axios";
// import { BACKEND_URL } from "../config";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars

// export const Auth = ({ type }: { type: "signup" | "signin" }) => {
//     const navigate = useNavigate();
//     const [postInputs, setPostInputs] = useState<SignupInput>({
//         name: "",
//         username: "",
//         password: ""
//     });

//     async function sendRequest() {
//         try {
//             const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
//             const {jwt} = response.data;
//             console.log(response.data);
//             localStorage.setItem("token", jwt);
//             navigate("/blogs");
//         } catch(e) {
//             alert("Error while signing up")
//         }
//     }
    
//     return <div className="h-screen flex justify-center flex-col">
//         <div className="flex justify-center">
//             <div>
//                 <div className="px-10">
//                     <div className="text-3xl font-extrabold">
//                         Create an account
//                     </div>
//                     <div className="text-slate-500">
//                         {type === "signin" ? "Don't have an account?" : "Already have an account?" }
//                         <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
//                             {type === "signin" ? "Sign up" : "Sign in"}
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="pt-8">
//                     {type === "signup" ? <LabelledInput label="Name" placeholder="Harkirat Singh..." onChange={(e) => {
//                         setPostInputs({
//                             ...postInputs,
//                             name: e.target.value
//                         })
//                     }} /> : null}
//                     <LabelledInput label="Username" placeholder="harkirat@gmail.com" onChange={(e) => {
//                         setPostInputs({
//                             ...postInputs,
//                             username: e.target.value
//                         })
//                     }} />
//                     <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
//                         setPostInputs({
//                             ...postInputs,
//                             password: e.target.value
//                         })
//                     }} />
//                     <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// }

// interface LabelledInputType {
//     label: string;
//     placeholder: string;
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//     type?: string;
// }

// function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
//     return <div>
//         <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
//         <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
//     </div>
// }



import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@sashreek-das/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const { jwt } = response.data;
            console.log(response.data);
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            alert("Error while signing up");
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className="w-full max-w-md p-8 rounded-lg bg-gray-100 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        {type === "signup" ? "Create an Account" : "Welcome Back"}
                    </h2>
                    <p className="text-gray-500 mt-2">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link className="underline pl-2 text-gray-900 hover:text-gray-700" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                </div>
                <div className="mt-10">
                    {type === "signup" ? (
                        <LabelledInput
                            label="Name"
                            placeholder="Harkirat Singh..."
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                });
                            }}
                        />
                    ) : null}
                    <LabelledInput
                        label="Username"
                        placeholder="harkirat@gmail.com"
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            });
                        }}
                    />
                    <LabelledInput
                        label="Password"
                        type="password"
                        placeholder="123456"
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            });
                        }}
                    />
                    <button
                        onClick={sendRequest}
                        type="button"
                        className="mt-8 w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
                    >
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mt-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 transition-colors duration-300"
                placeholder={placeholder}
                required
            />
        </div>
    );
}