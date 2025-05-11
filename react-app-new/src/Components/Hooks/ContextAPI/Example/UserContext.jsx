import { createContext, useState } from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";

// * Step 1 :- Context Created 

export const UserContext = createContext();

// * Step 2: - Provider Created 

export function UserProvider() {
    const [user, setUser] = useState({
        name: "Nagarjun",
        role: "Software Developer",
        age: 25,
        city: "Nanded",
        salary: 25000,
        company: "Agiliad Technology"
    })

    function changeUser() {
        setUser({
            name: "Sumati",
            role: "Tester",
            age: 25,
            city: "Kolhapur",
            salary: 25000,
            company: "Agiliad Technology"
        });
    }

    function userReset() {
        setUser({
            name: "(name)",
            role: "(role)",
            age: "(age)",
            city: "(city)",
            salary: "(salary)",
            company: "(company)"
        });
    }
    return (

        <UserContext.Provider value={user}>
            <div>
                <h1>Welcome to the IT World 💀</h1>
                {/* <Header /> */}
                <Profile />
                <button onClick={changeUser}>Change User</button>
                <button onClick={userReset}>Reset User</button>
            </div>
        </UserContext.Provider>
    )
}
