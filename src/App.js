import logo from './logo.svg';
import './App.css';
import Login from './woo/Login';
import Signup from './woo/Signup';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Front from './woo/Front';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
