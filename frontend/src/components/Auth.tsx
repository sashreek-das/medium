import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { SignupInput } from "@sashreek-das/common"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    return <div className=" h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInputs)} */}
        <div className=" flex justify-center">
            <div className="border-4 border-black-500 p-6">
                <div>
                    <div className=" text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div>
                        Already have an account? <Link className="underline" to={"/signin"} > Signin </Link>
                    </div>
                </div>

                <div>
                    <LabelledInput label="Name" placeholder="Harkirat Singh.." onChange={(e) => {
                        setpostInputs(({
                            ...postInputs,
                            name: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Username" placeholder="xyz@gmail.com" onChange={(e) => {
                        setpostInputs(({
                            ...postInputs,
                            username: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="" onChange={(e) => {
                        setpostInputs(({
                            ...postInputs,
                            password: e.target.value
                        }))
                    }} />
                </div>
            </div>

        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}