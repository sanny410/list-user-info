import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormInput, FormInputTextArea} from "./formInput";
import "./formUser.scss"



function FormUser({list}) {

    const [readonly, setReadonly] = useState(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(JSON.stringify(data));


    const { id } = useParams();
    const idUser = Number (id);
    const user = list.list[idUser]

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
            <form id={"form_user_for_edit"} onSubmit={handleSubmit(onSubmit)}>
                <FormInput type={"text"} name={"name"} value={user.name} label={"Name"} readonly={readonly} register={register}/>
                <FormInput type={"text"} name={"user name"} value={user.name} label={"User name"} readonly={readonly} register={register}/>
                <FormInput type={"email"} name={"E-mail"} value={user.email} label={"E-mail"} readonly={readonly} register={register}/>
                <FormInput type={"text"} name={"Street"} value={user.address.street} label={"Street"} readonly={readonly} register={register}/>
                <FormInput type={"text"} name={"City"} value={user.address.city} label={"City"} readonly={readonly} register={register}/>
                <FormInput type={"text"} name={"Zip code"} value={user.address.zipcode} label={"Zip code"} readonly={readonly} register={register}/>
                <FormInput type={"phone"} name={"Phone"} value={user.phone} label={"Phone"} readonly={readonly} register={register}/>
                <FormInput type={"text"} name={"Website"} value={user.website} label={"Website"} readonly={readonly} register={register}/>
                <FormInputTextArea name={"Comment"} type={"text"} value={""} label={"Comment"}/>
            </form>
            <button className={"btn_submit"} type={"submit"} form={"form_user_for_edit"}>Отправить</button>
        </div>
    );
}

export default FormUser;