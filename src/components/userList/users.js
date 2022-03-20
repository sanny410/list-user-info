import React from "react";
import "./userList.scss"


function User({name, addressCity, companyName, id }) {

    return (
        <div className="User" key={id}>
            <div><span className={"user_title"}>ФИО:</span> {name}</div>
            <div><span className={"user_title"}>город:</span> {addressCity}</div>
            <div className={"about_user"}>
                <div>
                    <span className={"user_title"}>компания:</span>
                    {companyName}
                </div>
                <div>
                    <a href={`/formUser/${id}`} className={"about_user_link"}>Подробнее</a>
                </div>
            </div>
        </div>
    );
}

export default User;