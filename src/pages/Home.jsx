import { useEffect, useState } from "react";
import CardPokemon from "../Components/CardPokemon/CardPokemon.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import Spinner from "../Components/Fichier/fichier.jsx";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function loadPokemons() {
      try {
        const response = await fetch(
          "https://pokebuildapi.fr/api/v1/pokemon/generation/1",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }

        const dataPokemon = await response.json();

        if (isActive) {
          setPokemons(dataPokemon);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadPokemons();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log("Le Pokédex possède", pokedex.length, "Pokémons.");
  }, [pokedex]);

  return (
    <div className="lmj-layout-inner">
      <Sidebar pokedex={pokedex} />

      <main className="pokemon-list">
        {isLoading ? (
          <Spinner />
        ) : (
          pokemons.map((pokemon, index) => (
            <CardPokemon
              key={pokemon.pokedexId}
              pokemon={pokemon}
              index={index}
              setPokedex={setPokedex}
              pokedex={pokedex}
            />
          ))
        )}
      </main>
    </div>
  );
}
