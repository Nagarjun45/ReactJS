import { useReducer } from "react"

export function ReducerComp() {

    function reducer(state, action) {
        // console.log(state, action);

        switch (action.type) {
            case 'INCREMENT':
                return state + 1;

            case 'DECREMENT':
                return state - 1;

            // default:
            //     return state;
        }
    }
    // const [state, dispatch] = useReducer(ReducerComp, initialValue);
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>Counter : {state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </>
    )
}



// ? Counter with another wayy

export function Sounter() {

    const initialState = { count: 0 }

    function reducerFunction(state, action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };

            case "decrement":
                return { count: state.count - 1 }

            case "reset":
                return { count: 0 }
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState);
    return (
        <>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </>
    )
}