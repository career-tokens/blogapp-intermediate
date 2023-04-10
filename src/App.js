import logo from './logo.svg';
import './Navbar.css';
import './Home.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    </div>
    <div className="Home">
    <Home/>
    </div>
      </>
  );
}

export default App;
