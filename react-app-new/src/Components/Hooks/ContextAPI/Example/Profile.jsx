import { useContext } from "react"
import { UserContext } from "./UserContext"

export function Profile() {
    const user = useContext(UserContext)
    return (
        <>
            <p>Hello, <strong>{user.name}</strong>. Welcome to the <strong>{user.company}</strong>, You have allocated with the <b>{user.role}</b> and your salary will be {user.salary}</p>

            <h3>Please, Tell your Age and City</h3>

            <p>I'm <b>{user.age}</b> years old and I'm from <b>{user.city}</b></p>
        </>
    )
}