import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
