import { useEffect, useState } from "react";

export function ApiCall() {
    const [apiData, setapiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setapiData(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h1>Our Data</h1>
            {apiData.map((curData) => {
                return <li key={curData.id}>Title for id {curData.id} : {curData.title}</li>
            })}
        </>
    )
}