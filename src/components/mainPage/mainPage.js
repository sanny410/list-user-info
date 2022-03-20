import React from "react";
import {Route, Routes} from "react-router-dom";
import UserList from "../userList/userList";
import FormUser from "../formUser/formUser";

import "./mainPage.scss"


function MainPage() {

    return (
        <div className="MainPage">
            <Routes>
                <Route exact path='/' element={<UserList />}/>
                <Route path='/formUser' element={<FormUser />} />
            </Routes>
        </div>
    );
}

export default MainPage;