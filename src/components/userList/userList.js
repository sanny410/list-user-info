import React, {useEffect, useState} from "react";
import User from "./users";
import Loader from "./loader";

import "./userList.scss"


function UserList({list}) {

    const [loader, setLoader] = useState({loader: true});

    useEffect(()=> {
        setLoader({loader: false})
    }, [])

        return (<div className="UserList">
            <h2>Список пользователей</h2>
            <div className={"users"}>
                {(loader.loader === true)?  <Loader /> :
                    <div>{list.list.map(item => {
                    return <User name={item.name}
                          addressCity={item.address.city}
                          companyName={item.company.name}
                          key={item.id}
                          id={item.id}/>
                                })}</div>}
            </div>
        </div>)
}


export default UserList;