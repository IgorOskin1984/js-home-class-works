import React from "react";

function Table(props) {
    let i = 1;
    return (
        <table>
            <tbody>
                {props.data.map((item) => {
                    return (
                        <tr>
                            <td>{i++}</td>
                            <td>{item.txt}</td>
                            <td>{item.rate}</td>
                            <td>{item.cc}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table