import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Personajes.css";

const Personajes = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const navigate = useNavigate();

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const data = await response.json();
    setPokemon(data.results);
  };

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleSearch = () => {
    if (selectedPokemon) {
      getPokemon(selectedPokemon);
    }
    navigate(`/personajes/${selectedPokemon}`);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="container">
      <div className="buscador">
        <h1>Selecciona un Pokemón</h1>
        <select
          className="opcion"
          value={selectedPokemon}
          onChange={handleChange}
        >
          <option value="">POKEMÓN</option>
          {pokemon.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="boton" onClick={handleSearch}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default Personajes;
