import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>Coded by <a href="https//kelsiwilliams.com" target="_blank" rel="noreferrer">Kelsi Williams</a> and is <a href="https://github.com/kelsi-will/dictionary-project" target="_blank" rel="noreferrer">open-sourced</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
