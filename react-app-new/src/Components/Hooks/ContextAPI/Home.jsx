import { BioContext } from "./index";
import { useContext } from "react";

export function Home() {
    const context = useContext(BioContext);
    return <h1>Hello Context API Bhai, My Name is {context}</h1>
}