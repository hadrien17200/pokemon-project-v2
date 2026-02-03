import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPokemon from "../Components/CardPokemon/CardPokemon.jsx";
import "../Components/CardPokemon/CardPokemon.scss";
import Spinner from "../Components/Fichier/fichier.jsx";

export default function DetailsPokemon() {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function loadPokemon() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${idPokemon}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }

        const data = await response.json();

        if (isActive) {
          setPokemon(data);
        }
      } catch (error) {
        if (isActive && error.name !== "AbortError") {
          setHasError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadPokemon();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [idPokemon]);

  if (isLoading) {
    return (
      <div className="post-container">
        <Spinner />
      </div>
    );
  }

  if (hasError || !pokemon) {
    return <p className="post-container">Pokemon introuvable.</p>;
  }

  return (
    <main className="pokemon-list">
      <CardPokemon
        pokemon={pokemon}
        index={0}
        pokedex={pokedex}
        setPokedex={setPokedex}
      />
    </main>
  );
}
