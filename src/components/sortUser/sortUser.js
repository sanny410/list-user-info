import React from "react";
import "./sortUser.scss"

function SortUser({sortCity, sortCompany}) {
    return (
        <div className="SortUser">
            <h3 className={"sort_title"}>Сортировка</h3>
            <button className={"btn sort_by_city"} onClick={sortCity}>по городу</button>
            <button className={"btn sort_by_company"} onClick={sortCompany}>по компании</button>
        </div>
    );
}

export default SortUser;