
import './App.css';
import Login from "./Login.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
