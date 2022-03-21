import React from "react";
import {FormInput, FormInputTextArea} from "./formInput";
import "./formUser.scss"


function FormUser() {
    return (
        <div className="FormUser">
            <div className={"head_form"}>
                <h2>Профиль пользователя</h2>
                <button className={"btn"}>Редактировать</button>
            </div>
            <form className={"form_user_for_edit"}>
                <FormInput type={"text"} placeholder={"Иван Иванов"} label={"Name"} />
                <FormInput type={"text"} placeholder={"Иван Иванов"} label={"User name"} />
                <FormInput type={"email"} placeholder={"example@mail.com"} label={"E-mail"} />
                <FormInput type={"text"} placeholder={"ул.Пример"} label={"Street"} />
                <FormInput type={"text"} placeholder={"Москва"} label={"City"} />
                <FormInput type={"text"} placeholder={"1234234"} label={"Zip code"} />
                <FormInput type={"phone"} placeholder={"89991112233"} label={"Phone"} />
                <FormInput type={"text"} placeholder={"www.example.com"} label={"Website"} />
                <FormInputTextArea type={"text"} placeholder={""} label={"Comment"} size={"140"}/>
            </form>
            <button className={"btn_submit"} type={"submit"}>Отправить</button>
        </div>
    );
}

export default FormUser;