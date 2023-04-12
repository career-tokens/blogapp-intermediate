import logo from './logo.svg';
import './Navbar.css';
import './Home.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Navbar/>
    </div>
      <div className="Home">
        <Routes>
            <Route  path="/" element={<Home />}/>
          {/** exact is req because for otherwise path will be seen such that / is part of /create 
           * so that will be executed */}    
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
