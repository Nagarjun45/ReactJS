import { useEffect, useState } from "react";

function PhaseEffect() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    // useEffect(() => {
    //     alert("Bhai har ispe render hoga")
    // })

    // useEffect(() => {
    //     alert("Bhai sirf pahle render pe run hoga phir dikhai hi nai dega")
    // }, [])

    useEffect(() => {
        alert("Bhai ab multiple states pe render hoga jo bhi click hoga uspe render hoga")
    }, [count, total])

    useEffect(() => {
        alert("Count is Updated !")

        return (() => {
            alert`Count is unmounted from UI`
        })
    }, [count])



    function handleClick() {
        setCount(count + 1);
    }

    function handleTotal() {
        setTotal(total + 1)
    }

    return (
        <>
            <h1 style={{ color: "red" }}>Count :{count}</h1>
            <button onClick={handleClick}>Count Badhega</button>
            <hr />
            <h1>Total :{total}</h1>
            <button onClick={handleTotal}>Total Badhega</button>
        </>
    )
}
export default PhaseEffect;