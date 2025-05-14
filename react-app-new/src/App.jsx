
import React from "react";

import MainContent from "./Components/Component Reuse/Reuse";
import { UserCard } from "./Components/Task 1/UserCard";
import { Props } from "./Components/Props/Props";
// import User from "./Components/Props/PropTypes";
import Sard from "./Components/Props/ChildrenProp";
import ConditionalRender from "./Components/Conditional Rendering/ConditionalRender";
import Handle from "./Components/Event Handling/Handle";
import Counter from "./Components/State/Counter";
import NameComponent, { EditableName } from "./Components/Hooks/useState Hook/String";
import Taunter from "./Components/Hooks/useState Hook/Number";
import ToggleMessage from "./Components/Hooks/useState Hook/Boolean";
import PhaseEffect from "./Components/Hooks/useEffect Hook/PhaseEffect";
import Logger from "./Components/Hooks/useEffect Hook/Logger";
import CleanUp from "./Components/Hooks/useEffect Hook/CleanUP";
import { ApiCall } from "./Components/Hooks/useEffect Hook/ApiCall";
import { PokemonApi } from "./Components/Hooks/useEffect Hook/PokemonApi";
import { BioProvider } from "./Components/Hooks/ContextAPI";
import { Home } from "./Components/Hooks/ContextAPI/Home";
import { UserProvider } from "./Components/Hooks/ContextAPI/Example/UserContext";
import { Header } from "./Components/Hooks/ContextAPI/Example/Header";
import { PrevValueTracker } from "./Components/Hooks/useRef Hook/FocusInput";
import { UseRef } from "./Components/Hooks/useRef Hook/UseRef";
import { ReducerComp, Sounter } from "./Components/Hooks/useReducer Hook/ReducerComp";
function App() {
  return (
    <>
      {/* <h1>Hello React</h1>
      <p>Bhai Sikha de</p> */}


      {/* <MainContent /> */}
      {/* <UserCard name="Nagarjun" age={25} city="Nanded" />
      <UserCard name="Sumati" age={22} city="Kolhapur" />
      <UserCard name="Prashnat" age={25} city="Solapur" /> */}
      {/* <Props name="Nagarjun" age={25} city="Nanded" /> */}

      {/* Abhi hum isme Default props dekh rahe hai to kuch pass nai kiya */}
      {/* <Props /> */}

      {/* <User name= "Nagarjun" age = {25}/> */}

      {/* This is for Children Props */}
      {/* <Sard>
        <h2>Hello from Inside Card !</h2>
        <p>This is Nested Content</p>
      </Sard> */}

      {/* Conditional Rendering */}
      {/* <ConditionalRender isLoggedIn={true}/> */}
      {/* <Handle /> */}

      {/* State In React Ke sath Examples */}
      {/* <Counter /> */}

      {/* Hooks ka Practice */}

      {/* <NameComponent /> */}

      {/* <EditableName /> */}

      {/* <Taunter /> */}

      {/* <ToggleMessage /> */}

      {/* UseEffect ke jalwe */}
      {/* <PhaseEffect /> */}

      {/* <Logger /> */}

      {/* <CleanUp /> */}

      {/* <ApiCall /> */}


      {/* <PokemonApi /> */}


      {/* ContextAPI Wale :- Hame Yaha par jo bhi consumer hai unko Provider main Wrap karna padta hai */}

      {/* <BioProvider>
        <Home />
      </BioProvider> */}

      {/* <UserProvider /> */}

      {/* USeRef Wale hai Yaha */}

      {/* <PrevValueTracker /> */}

      {/* <UseRef /> */}

      {/* Reducer wala Part Yaha  */}

      {/* <ReducerComp /> */}

      <Sounter />



    </>
  )
}

export default App;