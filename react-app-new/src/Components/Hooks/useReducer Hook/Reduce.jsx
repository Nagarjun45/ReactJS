import React, { useReducer } from 'react';

// ✅ 1. Reducer Function (ab state is just a number)
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

// ✅ 2. Component
function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0); // 👈 Initial state is number

    return (
        <div style={{ padding: '20px', fontSize: '20px' }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default Counter;
