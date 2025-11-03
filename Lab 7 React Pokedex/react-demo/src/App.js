import './App.css';
import React, { useState, useEffect } from 'react';

function Pokemon(props) {
  const { name, type, imageUrl } = props;

  const src = imageUrl || "error.png";

  return (
    <div className="pokemon-card">
      <img
        src={src}
        alt={`Image of ${name}`}
        className="pokemon-image"
        onError={(e) => { e.target.src = "error.png"; }}
      />
      <h3 className="pokemon-name">Name: {name}</h3>
      <p className="pokemon-type">Type: <span className="capitalize-text">{type}</span></p>
    </div>
  );
}

function Search() {
  const [nameInput, setNameInput] = useState('mew'); 
  const [pokemonName, setPokemonName] = useState(''); 
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonImageUrl, setPokemonImageUrl] = useState(''); 
  const [loadingStatus, setLoadingStatus] = useState('initial');

  const fetchPokemon = async (queryNameOverride) => {
    const queryName = (queryNameOverride || nameInput).toLowerCase().trim();
    if (!queryName) return;

    setLoadingStatus('loading');
    setPokemonName('Loading...');

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryName}`);

      if (!response.ok) {
        setLoadingStatus('error');
        setPokemonName('Not Found');
        setPokemonType('');
        setPokemonImageUrl('');
        return;
      }

      const data = await response.json();

      setPokemonName(data.name);
      setPokemonType(data.types[0].type.name);
      setPokemonImageUrl(data.sprites.other['official-artwork'].front_default);
      setLoadingStatus('loaded');

    } catch (error) {
      setLoadingStatus('error');
      setPokemonName('Error');
      setPokemonType('');
      setPokemonImageUrl('');
    }
  };

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleClick = () => {
    fetchPokemon();
  };
  
  useEffect(() => {
    fetchPokemon('mew'); }, []);

  const renderSearchResult = () => {
    if (loadingStatus === 'loading') {
      return <p className="loading-message">Fetching...</p>;
    }
    if (loadingStatus === 'error') {
      return <p className="error-message">Pokemon {pokemonName}!</p>;
    }
    if (loadingStatus === 'loaded') {
      return (
        <div className="search-result-card">
          <h2 className="search-result-title">Search Result</h2>
          <Pokemon
            name={pokemonName}
            type={pokemonType}
            imageUrl={pokemonImageUrl}
          />
        </div>
      );
    }
    return null; 
  };

  return (
    <div className="search-container">
      <h2 className="search-header">Search Any Pokemon</h2>
      
      <div className="search-controls">
        {}
        <input
          type="text"
          value={nameInput}
          onChange={handleChange}
          placeholder="Enter Pokemon Name"
          className="search-input"
        />
        {}
        <button
          onClick={handleClick}
          className="search-button"
        >
          Get Info
        </button>
      </div>
      {}
      {renderSearchResult()}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          Welcome to React Pokedex!
        </h1>
      </header>
      <Search />
      
      <div className="list-container">
        <h2 className="list-header">My Favorite Pokemon List</h2>
        <div className="pokemon-list">
          {}
          <Pokemon name="Gastly" type="Ghost" imageUrl="gastly.png" />
          <Pokemon name="Magikarp" type="Water" imageUrl="magikarp.jpg" />
          <Pokemon name="Meowth" type="Normal" imageUrl="meowth.png" />
          <Pokemon name="Teddiursa" type="Normal" imageUrl="teddiursa.png" />
        </div>
      </div>
    </div>
  );
}
export default App;