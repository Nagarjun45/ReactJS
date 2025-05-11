import { useState, useEffect } from "react";

function CleanUp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <h1>Count : {count}</h1>
        </>
    )
}

export default CleanUp;