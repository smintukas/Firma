import React, {useEffect, useState} from "react";

const DepartmentPage = () => {
    const [departments, setDepartments] = useState([])

    function callBackEnd() {
        fetch('http://localhost:3500/all')
            .then(resp => {
                 resp.json().then(json => {
                    console.log(json)
                    setDepartments(json);
                });
            })
    }
    const callBackEnd2 = async () => {
        try {
            const respBe = await fetch('http://localhost:3500/all')
            console.log(1,respBe)
            const respStream = await respBe.json()
            console.log(2, respStream)
            setDepartments(respStream)
        } catch (e) {
            console.log('error :D', e)
        }
    }

    return (
        <main className="department-page">
            <h1>Smints front end app</h1>
            <h2>Departments</h2>
            <pre>read abot ES6 (mozilla Mdn)</pre>
            <button onClick={callBackEnd}>load departments</button>
            <button onClick={callBackEnd2}>load departments 2</button>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>region id</th>
                </tr>
                </thead>
                <tbody>
                {departments.map((obj, index) => {
                    return (
                        <tr key={index}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.regionId}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </main>
    )
}

export default DepartmentPage