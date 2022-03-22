import React, {useEffect} from "react";
import User from "./users";

import "./userList.scss"


function UserList({list}) {

    return (
        <div className="UserList">
            <h2>Список пользователей</h2>
            <div className={"users"}>
                <div>{list.list.map(item => {
                    return <User name={item.name}
                                 addressCity={item.address.city}
                                 companyName={item.company.name}
                                 key={item.id}
                                 id={item.id}/>
                })}</div>
            </div>
        </div>
    );
}


export default UserList;