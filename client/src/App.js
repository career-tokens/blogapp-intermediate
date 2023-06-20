import './components/Navbar.css';
import './components/Home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Dashboard from './components/Dashboard';
import OpeningScreen from './components/OpeningScreen';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Routes without Navbar */}
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        
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
        <Route exact path="/openingscreen" element={
          <>
            <Navbar />
            <OpeningScreen />
          </>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
