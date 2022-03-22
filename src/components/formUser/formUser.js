import React, {useEffect, useState} from "react";
import {FormInput, FormInputTextArea} from "./formInput";
import "./formUser.scss"
import {useParams} from "react-router-dom";


function FormUser({list}) {

    const [readonly, setReadonly] = useState(true)

    const { id } = useParams();
    const idUser = Number (id);
    const user = list.list[idUser];

    const readOnlyToggle = () => {
        if (readonly === true) {
            setReadonly(false)
        } else {
            setReadonly(true)
        }
    }

    return (
        <div className="FormUser">
            <div className={"head_form"}>
                <h2>Профиль пользователя</h2>
                <button className={"btn"} onClick={readOnlyToggle}>Редактировать</button>
            </div>
            <form className={"form_user_for_edit"}>
                <FormInput type={"text"} value={user.name} label={"Name"} readonly={readonly}/>
                <FormInput type={"text"} value={user.name} label={"User name"} readonly={readonly}/>
                <FormInput type={"email"} value={user.email} label={"E-mail"} readonly={readonly}/>
                <FormInput type={"text"} value={user.address.street} label={"Street"} readonly={readonly}/>
                <FormInput type={"text"} value={user.address.city} label={"City"} readonly={readonly}/>
                <FormInput type={"text"} value={user.address.zipcode} label={"Zip code"} readonly={readonly}/>
                <FormInput type={"phone"} value={user.phone} label={"Phone"} readonly={readonly}/>
                <FormInput type={"text"} value={user.website} label={"Website"} readonly={readonly}/>
                <FormInputTextArea type={"text"} value={""} label={"Comment"}/>
            </form>
            <button className={"btn_submit"} type={"submit"}>Отправить</button>
        </div>
    );
}

export default FormUser;