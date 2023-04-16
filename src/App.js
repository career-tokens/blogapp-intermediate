import logo from './logo.svg';
import './Navbar.css';
import './Home.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Reset from './Reset';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Routes without Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        
        {/* Routes with Navbar */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route exact path="/create" element={
          <>
            <Navbar />
            <Create />
          </>
        } />
        <Route exact path="/blogs/:id" element={
          <>
            <Navbar />
            <BlogDetails />
          </>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
