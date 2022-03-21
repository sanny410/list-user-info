import React from "react";
import "./sortUser.scss"

function SortUser() {
    return (
        <div className="SortUser">
            <h3 className={"sort_title"}>Сортировка</h3>
            <button className={"btn sort_by_city"}>по городу</button>
            <button className={"btn sort_by_company"}>по компании</button>
        </div>
    );
}

export default SortUser;