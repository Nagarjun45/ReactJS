import { createContext } from "react";
// Step 1 (WareHouse Created)
export const BioContext = createContext();

// Step 2 ----> Provider (Delivery Boy) ----> Isme sab Data rahega jaise Computer, mobile laptop hai 

export function BioProvider({ children }) {
    const myName = "Nagarjun"
    return <BioContext.Provider value={myName}>
        {children}
    </BioContext.Provider>
}
