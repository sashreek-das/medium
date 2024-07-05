import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@sashreek-das/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        }
        catch(e){
            alert("error while signing up ")
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-96">
                <div className="text-center mb-6">
                    <div className="text-3xl font-extrabold text-gray-900">
                        {type === "signup" ? "Create an account" : "Sign in to your account"}
                    </div>
                    <div className="mt-2 text-gray-600">
                        {type === "signin" ? (
                            <>
                                Don't have an account? <Link className="underline text-gray-800" to="/signup">Sign up</Link>
                            </>
                        ) : (
                            <>
                                Already have an account? <Link className="underline text-gray-800" to="/signin">Sign in</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="space-y-4">
                    {type === "signup"?<LabelledInput
                        label="Name"
                        placeholder="Harkirat Singh.."
                        onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                name: e.target.value,
                            });
                        }}
                    />: null}
                    <LabelledInput
                        label="Username/Email"
                        placeholder="xyz@gmail.com"
                        onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                username: e.target.value,
                            });
                        }}
                    />
                    <LabelledInput
                        label="Password"
                        type="password"
                        placeholder=""
                        onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                password: e.target.value,
                            });
                        }}
                    />
                    <button
                        type="button" onClick={sendRequest}
                        className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
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
        <div>
            <label className="block mb-2 text-sm text-gray-700 font-semibold">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
