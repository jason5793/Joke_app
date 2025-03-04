import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <h1>Hi generate  a joke using react and Joke Api</h1>
     <Joke/>
     </div> 
     );
}

export default App;
