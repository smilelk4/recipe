import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "190729ca";
  const REACT_APP_KEY = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${REACT_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <header>
      <h1>Recipe API</h1>
      <p>Type in keywords like "salad", "pasta", and more!</p>
      </header>
      <form onSubmit={getSearch} className="search-form" action="submit">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
