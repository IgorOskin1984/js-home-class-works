import React from "react";
import data from "../../data/data"
import Table from "../table/table";

console.dir(data);

function App() {
    return (
        <>
            <h1>Курс валют</h1>
            <Table data={data}></Table>
        </>

    )
}

export default App;
