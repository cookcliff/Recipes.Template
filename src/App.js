import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          My Recipes <span className="heart">-</span> John Doe
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style="background-color: #fcba03;">
          <h1>My Recipe</h1>
          <p>Milk + Carrot</p>
        </div>
      </header>
    </div>
  );
}

export default App;
