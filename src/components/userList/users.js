import React from "react";
import {Link} from "react-router-dom";
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
                    <Link to={`/formUser/${id}`} className={"about_user_link"}>Подробнее</Link>
                </div>
            </div>
        </div>
    );
}

export default User;