import React from "react";
import {Route, Routes} from "react-router-dom";
import UserList from "../userList/userList";
import FormUser from "../formUser/formUser";

import "./mainPage.scss"


function MainPage({list}) {

    return (
        <div className="MainPage">
            <Routes>
                <Route exact path='/' element={<UserList list={list}/>}/>
                <Route path={'/formUser/:id'} element={<FormUser list={list}/>} />
            </Routes>
        </div>
    );
}

export default MainPage;