import "./CardPokemon.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconAdd from "../../../public/add.png";

function getColorHexa(color) {
  const colors = {
    green: "#00FF00",
    orange: "#FFA500",
    blue: "#0000FF",
    lightgreen: "#90EE90",
    lightgrey: "#D3D3D3",
    yellow: "#FFFF00",
    purple: "#800080",
    pink: "#FFC0CB",
    violet: "#EE82EE",
    red: "#FF0000",
    brown: "#A52A2A",
    sandybrown: "#F4A460",
    lightblue: "#ADD8E6",
    darkblue: "#00008B",
    darkgrey: "#A9A9A9",
    black: "#000000",
    skyblue: "#87CEEB",
  };

  return colors[color] || "#FFFFFF";
}

function getTypeColor(type) {
  const map = {
    Plante: "green",
    Feu: "orange",
    Eau: "blue",
    Insecte: "lightgreen",
    Normal: "lightgrey",
    "�lectrik": "yellow",
    Electrik: "yellow",
    Poison: "purple",
    "F�e": "pink",
    Psy: "violet",
    Combat: "red",
    Sol: "sandybrown",
    Glace: "lightblue",
    Dragon: "darkblue",
    Roche: "brown",
    Acier: "darkgrey",
    "T�n�bres": "black",
    Tenebres: "black",
    Vol: "skyblue",
  };

  return map[type] || "lightgrey";
}

export default function CardPokemon({ pokemon, index, pokedex, setPokedex }) {
  const type = pokemon.apiTypes?.[0]?.name || "Normal";
  const colorHex = getColorHexa(getTypeColor(type));
  const [isOpen, setIsopen] = useState(false);

  return (
    <article
      data-reverse={isOpen}
      onClick={() => {
        setIsopen(!isOpen);
      }}
    >
      <div
        className="cardInner"
        data-index={index}
        style={{
          backgroundColor: colorHex,
          borderColor: colorHex,
        }}
      >
        <span
          className="addToPokedex"
          onClick={(e) => {
            e.stopPropagation();

            const entree = { id: pokemon.pokedexId, name: pokemon.name };

            setPokedex((prev) => {
              const present = prev.some((p) => p.id === entree.id);
              if (present) return prev;
              return [...prev, entree];
            });
          }}
        >
          <img src={iconAdd} alt="Ajouter au Pokedex" />
        </span>

        <figure className="cardFront">
          <picture>
            <img src={pokemon.image} alt={pokemon.name} />
          </picture>

          <figcaption>
            <span className="type">{type}</span>

            <h2>{pokemon.name}</h2>

            <ul>
              <li>PV : {pokemon.stats.HP}</li>
              <li>Attaque : {pokemon.stats.attack}</li>
              <li>Défense : {pokemon.stats.defense}</li>
              <li>Attaque spéciale : {pokemon.stats.special_attack}</li>
              <li>Vitesse : {pokemon.stats.speed}</li>
            </ul>
          </figcaption>
        </figure>
        <div className="cardBack">
          <Link
            to={`/DetailsPokemon/${pokemon.pokedexId}`}
            onClick={(e) => e.stopPropagation()}
          >
            Voir plus
          </Link>
        </div>
      </div>
    </article>
  );
}
