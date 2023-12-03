import React from "react";

export default function Input(props) {
    return (
        <>
            {props.input.labelName && (
                <label
                    htmlFor={props.input.id}
                    className="font-medium mb-2 inline-block text-base"
                >
                    {props.input.labelName}
                </label>
            )}
            <input
                className="hover:shadow-xl shadow-lg border-none  py-4 px-9 rounded-full w-full transition "
                id={props.input.id}
                type={props.input.type}
                placeholder={props.input.placeholder}
            />
        </>
    );
}
