import { useRef } from "react";

export function UseRef() {

    // console.log(document.getElementById('username'))
    // console.log(document.getElementById('password'))

    const userName = useRef(null);
    const userPassword = useRef("Nagarjun");

    // console.log(userName);
    // console.log(userPassword);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(userName.current.value, userPassword.current.value);
        userName.current.focus();
        // userPassword.current.focus();

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="username" ref={userName} />
            <input type="password" id="password" ref={userPassword} />
            <button>Submit</button>
        </form>
    )
}