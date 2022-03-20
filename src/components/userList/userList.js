import React, {useEffect, useState} from "react";
import User from "./users";

import "./userList.scss"


function UserList() {

    const [list, setList] = useState({
        list: []
    })

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(resp => setList({list: resp}))
        },[])

    return (
        <div className="UserList">
            <h2>Список пользователей</h2>
            <div className={"users"}>
                <div>{list.list.map(item => {
                    return <User name={item.name} addressCity={item.address.city} companyName={item.company.name} id={item.id}/>
                })}</div>
            </div>
        </div>
    );
}


export default UserList;