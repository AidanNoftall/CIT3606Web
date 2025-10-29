import './App.css';

function Pokemon(props) {
  const { name, type, imageUrl } = props; 

  return (
    <div className="pokemon-card">
      <img 
        src={imageUrl} 
        alt={`Image of ${name}`} 
        style={{ width: '150px', height: '300px' }}
      />
      <h3>Name: {name}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Welcome to React Pokedex!<p></p>
        <div className="pokemon-list">{}
          <Pokemon className = "Pokemon" name ="Gastly" type="Ghost" imageUrl="gastly.png" />
          <Pokemon className = "Pokemon" name="Magikarp" type="Water" imageUrl="magikarp.jpg" />
          <Pokemon className = "Pokemon" name="Meowth" type="Normal" imageUrl="meowth.png" />
          <Pokemon className = "Pokemon" name="Teddiursa" type="Fire" imageUrl="teddiursa.png" />
        </div>
        </h1>
      </header>
    </div>
  );
}
export default App;