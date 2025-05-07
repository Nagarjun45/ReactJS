import { useEffect, useState } from "react";

function Logger() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval executed");
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            console.log("Time to stop")
            clearInterval(intervalId);
        };
    }, []);

    return (<>
        <h1>Seconds : {count}</h1>
    </>);
}

export default Logger;