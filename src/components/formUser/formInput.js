import React from "react";

import "./formUser.scss"


export function FormInput({label, type, value, size, readonly}) {
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input className={"input_form"} type={`${type}`} size={size} defaultValue={`${value}`} readOnly={readonly} required={false}/>
        </div>
    );
}

export function FormInputTextArea({label, type, value, size}) {
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input className={"text_area"} type={`${type}`} size={size} defaultValue={`${value}`}/>
        </div>
    );
}

// const readOnlyToggle = () => {
//     inputsArr.forEach(item => {
//         const readOnlyAttribute = item.getAttribute('readonly')
//         console.log(readOnlyAttribute)
//         if (readOnlyAttribute === true) {
//             item.setAttribute('readOnly', false)
//         } else {
//             item.setAttribute('readOnly', true)
//         }
//     })
// }