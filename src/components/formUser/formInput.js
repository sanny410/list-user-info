import React from "react";

import "./formUser.scss"


export function FormInput({label, type, placeholder, size}) {
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input type={`${type}`} placeholder={`${placeholder}`} size={size}/>
        </div>
    );
}

export function FormInputTextArea({label, type, placeholder, size}) {
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input className={"text_area"} type={`${type}`} placeholder={`${placeholder}`} size={size}/>
        </div>
    );
}