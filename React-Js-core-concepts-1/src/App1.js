import logo from './logo.svg';
import './App.css';

const number = 5000;
const singer1 = {name: 'Imran',job:'singer' }
const singer2 = {name: 'Eva Rahman',job:'singer' }
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '14px',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello, dude React. How are you?</h3>
        </div>
        <div className="music">
          <p>number: {number + 20}</p>
          <p style={singerStyle}>Name : {singer1.name} {singer1.job}</p>
          <p style={{color:'blue',backgroundColor:'white',padding:'16px',
        borderRadius: '12px'}}>Name : {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
