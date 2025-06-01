import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Redux/Actions";

export function Counter() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(increment())}>Increase kr Bhai</button>
            <button onClick={() => dispatch(decrement())}>Isko Ghata Bhai</button>
            <button onClick={() => dispatch(reset())}>Apni Jagah AA ja Bhai ab</button>
        </>
    )
}