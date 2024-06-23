import './App.css';
import About from "./components/About.js";
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center">Welcome! Please login or register below!</h1>
      <Login />

      <hr />

      <Register />
      
      <About />
    </div>
  );
}

export default App;
