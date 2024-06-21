import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PersonajeDetalle.css";

export default function Detalle() {
  const [pokemon, setPokemon] = useState("");
  const { name } = useParams();

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemon(data);
    console.log(data);
  };

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <div className="box">
      <div className="cajita">
        <div className="foto">
          {pokemon.sprites && pokemon.sprites.front_default && (
            <img
              className="imagen"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          )}
        </div>
        <ul className="box2">
          <h1>{pokemon.name}</h1>
          {pokemon.stats &&
            pokemon.stats.map((statObj) => (
              <li key={statObj.stat.name}>
                {statObj.stat.name}: {statObj.base_stat}
              </li>
            ))}
        </ul>
      </div>
      <NavLink className="botoncito" to="/personajes">
        <button>Volver</button>
      </NavLink>
    </div>
  );
}
