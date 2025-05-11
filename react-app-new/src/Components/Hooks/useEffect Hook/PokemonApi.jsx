import { useEffect, useState } from "react";

export function PokemonApi() {
    const [cartoon, setCartoon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(" https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((res) => res.json())
            .then((data) => {
                setCartoon(data);
                setLoading(false);

            })
    }, [])


    return (
        <>
            {loading ? (
                <h1>Loading....</h1>
            ) : (
                <ul>
                    <h1>Pikachu Bhau</h1>
                    <h2>{cartoon.name}</h2>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"} />
                </ul>
            )}
        </>
    )
}