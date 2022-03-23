import React from "react";
import {useForm} from "react-hook-form";
import "./formUser.scss"


export function FormInput({label, type, value, size, readonly, name, register}) {

    return (
        <div className="FormInput">
            <label>{label}</label>
            <input {...register(name)} className={"input_form"} name={`${name}`} type={`${type}`} size={size} defaultValue={`${value}`} readOnly={readonly} required={true}/>
        </div>
    );
}

export function FormInputTextArea({label, type, value, size, name}) {

    const {register} = useForm();

    return (
        <div className="FormInput">
            <label>{label}</label>
            <input {...register(name)} className={"text_area"} type={`${type}`} size={size} defaultValue={`${value}`} name={`${name}`}/>
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