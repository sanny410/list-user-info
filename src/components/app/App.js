import React, { useEffect, useState} from "react";
import SortUser from "../sortUser/sortUser";
import MainPage from "../mainPage/mainPage";

import './App.scss';

function App() {
    const [list, setList] = useState({list: []})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(resp => setList({list: resp}))
    },[]);

    function SortArrayCityUp(x,y) {
        if (x.address.city < y.address.city) {return -1;}
        if (x.address.city > y.address.city) {return 1;}
        return 0;
    }

    function SortArrayCompanyNameUp(x,y) {
        if (x.company.name < y.company.name) {return -1;}
        if (x.company.name > y.company.name) {return 1;}
        return 0;
    }

    const sortCity = () => {
        setList({list: list.list.sort(SortArrayCityUp)})
    }

    const sortCompany = () => {
        setList({list: list.list.sort(SortArrayCompanyNameUp)})
    }

  return (
    <div className="App">
        <SortUser sortCity={sortCity} sortCompany={sortCompany}/>
        <MainPage list={list}/>
    </div>
  );
}

export default App;
