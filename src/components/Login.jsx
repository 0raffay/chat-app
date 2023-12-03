import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import Input from "../utility-components/Input";


export default function Login() {
    const fields = [
        {
            id: "loginEmail",
            name: "loginEmail",
            type: "text",
            placeholder: "Email",
        },
        {
            id: "loginPassword",
            name: "loginPassword",
            type: "password",
            placeholder: "Password",
        },
    ];

    function singInUser() {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signed in")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error);
            });
    }

    return (
        <div
            id="login-main"
            className="h-screen w-full flex items-center justify-center px-4"
            style={{
                background:
                    "linear-gradient(153deg, #DEC4FC 1.34%, #91C6FC 96.22%)",
            }}
        >
            <div className="loginForm sm:py-10 sm:px-10 sm:rounded-lg bg-  w-full max-w-2xl">
                <div className="form-wrap">
                    <h4 className="form-heading text-4xl pb-5 font-medium text-center focus:outline-none focus:border-none  focus-visible:outline-none text-white mb-4">
                        Login
                    </h4>
                    <div className="grid grid-cols-2 gap-8">
                        {fields.map((field, index) => {
                            return (
                                <div
                                    className={
                                        "input_wrap col-span-full sm:col-span-2"
                                    }
                                >
                                    <Input input={field} />
                                </div>
                            );
                        })}

                        <div className="button_wrap text-center col-span-full">
                            <button
                                onClick={singInUser}
                                type="button"
                                className="text-white col-span-full py-4 border border-purple-primary bg-purple-primary rounded-full w-full block  hover:shadow-lg text-sm transition"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
