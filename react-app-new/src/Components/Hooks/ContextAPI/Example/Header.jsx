import { useContext } from "react";
import { UserContext } from "./UserContext";

export function Header() {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Hello, {user.name}</h2>
            <h3>Your Role : {user.role}</h3>
        </>
    )
}